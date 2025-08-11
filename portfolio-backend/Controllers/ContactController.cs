using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using PortfolioBackend.Data;
using PortfolioBackend.Models.Mongo;
using PortfolioBackend.Services;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;

namespace PortfolioBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly MongoDbContext _mongoContext;
    private readonly IAzureCognitiveService _cognitiveService;
    private readonly ILogger<ContactController> _logger;

    public ContactController(
        MongoDbContext mongoContext, 
        IAzureCognitiveService cognitiveService,
        ILogger<ContactController> logger)
    {
        _mongoContext = mongoContext;
        _cognitiveService = cognitiveService;
        _logger = logger;
    }

    /// <summary>
    /// Submit a contact form message with sentiment analysis
    /// </summary>
    [HttpPost]
    public async Task<IActionResult> SubmitContact([FromBody] ContactMessageRequest request)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Analyze sentiment using Azure Cognitive Services
            var (sentiment, score) = await _cognitiveService.AnalyzeSentimentAsync(request.Message);

            var contactMessage = new ContactMessage
            {
                Name = request.Name,
                Email = request.Email,
                Message = request.Message,
                Sentiment = sentiment,
                SentimentScore = score,
                Timestamp = DateTime.UtcNow,
                IpAddress = HttpContext.Connection.RemoteIpAddress?.ToString(),
                UserAgent = HttpContext.Request.Headers.UserAgent.ToString()
            };
            
            await _mongoContext.ContactMessages.InsertOneAsync(contactMessage);

            _logger.LogInformation("Contact message submitted: {Name} - {Sentiment}", request.Name, sentiment);

            return Ok(new 
            { 
                message = "Contact message submitted successfully",
                sentiment = sentiment,
                sentimentScore = score,
                id = contactMessage.Id
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error submitting contact message");
            return StatusCode(500, new { error = "Failed to submit contact message" });
        }
    }

    /// <summary>
    /// Get contact messages (admin only)
    /// </summary>
    [HttpGet]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> GetContactMessages([FromQuery] DateTime? startDate, [FromQuery] DateTime? endDate)
    {
        try
        {
            var filter = Builders<ContactMessage>.Filter.Empty;
            
            if (startDate.HasValue || endDate.HasValue)
            {
                var dateFilter = Builders<ContactMessage>.Filter.Empty;
                
                if (startDate.HasValue)
                {
                    dateFilter &= Builders<ContactMessage>.Filter.Gte(x => x.Timestamp, startDate.Value);
        }
                
                if (endDate.HasValue)
    {
                    dateFilter &= Builders<ContactMessage>.Filter.Lte(x => x.Timestamp, endDate.Value);
                }
                
                filter &= dateFilter;
            }
            
            var messages = await _mongoContext.ContactMessages
                .Find(filter)
                .SortByDescending(x => x.Timestamp)
                .ToListAsync();
            
            return Ok(messages);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving contact messages");
            return StatusCode(500, new { error = "Failed to retrieve contact messages" });
        }
    }

    /// <summary>
    /// Get contact message by ID (admin only)
    /// </summary>
    [HttpGet("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> GetContactMessage(string id)
    {
        try
        {
            var message = await _mongoContext.ContactMessages
                .Find(x => x.Id == id)
                .FirstOrDefaultAsync();

            if (message == null)
            {
                return NotFound(new { error = "Contact message not found" });
            }

            return Ok(message);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving contact message {Id}", id);
            return StatusCode(500, new { error = "Failed to retrieve contact message" });
        }
    }

    /// <summary>
    /// Get sentiment analytics (admin only)
    /// </summary>
    [HttpGet("analytics")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> GetSentimentAnalytics([FromQuery] DateTime? startDate, [FromQuery] DateTime? endDate)
    {
        try
        {
            var filter = Builders<ContactMessage>.Filter.Empty;
            
            if (startDate.HasValue || endDate.HasValue)
            {
                var dateFilter = Builders<ContactMessage>.Filter.Empty;

                if (startDate.HasValue)
            {
                    dateFilter &= Builders<ContactMessage>.Filter.Gte(x => x.Timestamp, startDate.Value);
        }
                
                if (endDate.HasValue)
    {
                    dateFilter &= Builders<ContactMessage>.Filter.Lte(x => x.Timestamp, endDate.Value);
                }
                
                filter &= dateFilter;
            }
            
            // Get sentiment distribution
            var sentimentStats = await _mongoContext.ContactMessages
                .Aggregate()
                .Match(filter)
                .Group(x => x.Sentiment, g => new
                {
                    Sentiment = g.Key,
                    Count = g.Count(),
                    AverageScore = g.Average(x => x.SentimentScore)
                })
                .ToListAsync();

            // Get recent messages
            var recentMessages = await _mongoContext.ContactMessages
                .Find(filter)
                .SortByDescending(x => x.Timestamp)
                .Limit(10)
                .ToListAsync();

            var analytics = new
                {
                TotalMessages = await _mongoContext.ContactMessages.CountDocumentsAsync(filter),
                SentimentDistribution = sentimentStats,
                RecentMessages = recentMessages.Select(x => new
                {
                    x.Name,
                    x.Email,
                    x.Sentiment,
                    x.SentimentScore,
                    x.Timestamp
                })
            };
            
            return Ok(analytics);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving sentiment analytics");
            return StatusCode(500, new { error = "Failed to retrieve sentiment analytics" });
        }
    }
}

public class ContactMessageRequest
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    [EmailAddress]
    [StringLength(100)]
    public string Email { get; set; } = string.Empty;
    
    [Required]
    [StringLength(1000)]
    public string Message { get; set; } = string.Empty;
} 