using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using PortfolioBackend.Data;
using PortfolioBackend.Models.Mongo;

namespace PortfolioBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AnalyticsController : ControllerBase
{
    private readonly MongoDbContext _mongoContext;
    private readonly ILogger<AnalyticsController> _logger;
    
    public AnalyticsController(MongoDbContext mongoContext, ILogger<AnalyticsController> logger)
    {
        _mongoContext = mongoContext;
        _logger = logger;
    }
    
    /// <summary>
    /// Log a visitor interaction (page view, click, etc.)
    /// </summary>
    [HttpPost]
    public async Task<IActionResult> LogInteraction([FromBody] VisitorInteractionRequest request)
    {
        try
        {
            var interaction = new VisitorInteraction
            {
                Page = request.Page,
                Action = request.Action,
                SessionId = request.SessionId,
                IpAddress = HttpContext.Connection.RemoteIpAddress?.ToString(),
                UserAgent = HttpContext.Request.Headers.UserAgent.ToString(),
                Referrer = HttpContext.Request.Headers.Referer.ToString(),
                Duration = request.Duration,
                ElementId = request.ElementId,
                Metadata = request.Metadata
            };
            
            await _mongoContext.VisitorInteractions.InsertOneAsync(interaction);
            
            _logger.LogInformation("Logged interaction: {Page} - {Action}", request.Page, request.Action);
            
            return Ok(new { message = "Interaction logged successfully", id = interaction.Id });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error logging visitor interaction");
            return StatusCode(500, new { error = "Failed to log interaction" });
        }
    }
    
    /// <summary>
    /// Get aggregated analytics (admin only)
    /// </summary>
    [HttpGet]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> GetAnalytics([FromQuery] DateTime? startDate, [FromQuery] DateTime? endDate)
    {
        try
        {
            var filter = Builders<VisitorInteraction>.Filter.Empty;
            
            if (startDate.HasValue || endDate.HasValue)
            {
                var dateFilter = Builders<VisitorInteraction>.Filter.Empty;
                
                if (startDate.HasValue)
                {
                    dateFilter &= Builders<VisitorInteraction>.Filter.Gte(x => x.Timestamp, startDate.Value);
                }
                
                if (endDate.HasValue)
                {
                    dateFilter &= Builders<VisitorInteraction>.Filter.Lte(x => x.Timestamp, endDate.Value);
                }
                
                filter &= dateFilter;
            }
            
            // Get total interactions
            var totalInteractions = await _mongoContext.VisitorInteractions.CountDocumentsAsync(filter);
            
            // Get page views by page
            var pageViews = await _mongoContext.VisitorInteractions
                .Aggregate()
                .Match(filter)
                .Group(x => x.Page, g => new
                {
                    Page = g.Key,
                    Views = g.Count(),
                    LastViewed = g.Max(x => x.Timestamp)
                })
                .ToListAsync();
            
            // Get actions by type
            var actions = await _mongoContext.VisitorInteractions
                .Aggregate()
                .Match(filter)
                .Group(x => x.Action, g => new
                {
                    Action = g.Key,
                    Count = g.Count()
                })
                .ToListAsync();
            
            // Get recent interactions
            var recentInteractions = await _mongoContext.VisitorInteractions
                .Find(filter)
                .SortByDescending(x => x.Timestamp)
                .Limit(10)
                .ToListAsync();
            
            var analytics = new
            {
                TotalInteractions = totalInteractions,
                PageViews = pageViews,
                Actions = actions,
                RecentInteractions = recentInteractions.Select(x => new
                {
                    x.Page,
                    x.Action,
                    x.Timestamp,
                    x.SessionId
                })
            };
            
            return Ok(analytics);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving analytics");
            return StatusCode(500, new { error = "Failed to retrieve analytics" });
        }
    }
    
    /// <summary>
    /// Get page-specific analytics
    /// </summary>
    [HttpGet("page/{page}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> GetPageAnalytics(string page, [FromQuery] DateTime? startDate, [FromQuery] DateTime? endDate)
    {
        try
        {
            var filter = Builders<VisitorInteraction>.Filter.Eq(x => x.Page, page);
            
            if (startDate.HasValue || endDate.HasValue)
            {
                var dateFilter = Builders<VisitorInteraction>.Filter.Empty;
                
                if (startDate.HasValue)
                {
                    dateFilter &= Builders<VisitorInteraction>.Filter.Gte(x => x.Timestamp, startDate.Value);
                }
                
                if (endDate.HasValue)
                {
                    dateFilter &= Builders<VisitorInteraction>.Filter.Lte(x => x.Timestamp, endDate.Value);
                }
                
                filter &= dateFilter;
            }
            
            var interactions = await _mongoContext.VisitorInteractions
                .Find(filter)
                .SortByDescending(x => x.Timestamp)
                .ToListAsync();
            
            var analytics = new
            {
                Page = page,
                TotalViews = interactions.Count,
                Actions = interactions.GroupBy(x => x.Action).Select(g => new
                {
                    Action = g.Key,
                    Count = g.Count()
                }),
                RecentInteractions = interactions.Take(10).Select(x => new
                {
                    x.Action,
                    x.Timestamp,
                    x.SessionId,
                    x.Duration
                })
            };
            
            return Ok(analytics);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving page analytics for {Page}", page);
            return StatusCode(500, new { error = "Failed to retrieve page analytics" });
        }
    }
}

public class VisitorInteractionRequest
{
    public string Page { get; set; } = string.Empty;
    public string Action { get; set; } = string.Empty;
    public string? SessionId { get; set; }
    public int? Duration { get; set; }
    public string? ElementId { get; set; }
    public Dictionary<string, object>? Metadata { get; set; }
} 