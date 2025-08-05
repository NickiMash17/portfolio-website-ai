using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using PortfolioBackend.Models;
using PortfolioBackend.Services;
using System.Text.Json;

namespace PortfolioBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IMongoCollection<Contact> _contacts;
    private readonly IAIService _aiService;
    private readonly ILogger<ContactController> _logger;

    public ContactController(IMongoDatabase database, IAIService aiService, ILogger<ContactController> logger)
    {
        _contacts = database.GetCollection<Contact>("contacts");
        _aiService = aiService;
        _logger = logger;
    }

    // POST: api/contact
    [HttpPost]
    public async Task<IActionResult> SubmitContact([FromBody] ContactFormRequest request)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { success = false, error = "Invalid request data" });
            }

            // Analyze sentiment using Azure Cognitive Services
            var sentimentResult = await _aiService.AnalyzeSentimentAsync(request.Message);

            // Create contact document
            var contact = new Contact
            {
                Name = request.Name,
                Email = request.Email,
                Subject = request.Subject,
                Message = request.Message,
                Sentiment = sentimentResult.Sentiment,
                SentimentScore = sentimentResult.ConfidenceScore,
                IpAddress = GetClientIpAddress(),
                UserAgent = Request.Headers["User-Agent"].ToString(),
                CreatedAt = DateTime.UtcNow,
                IsRead = false,
                IsReplied = false
            };

            // Save to MongoDB
            await _contacts.InsertOneAsync(contact);

            _logger.LogInformation("Contact form submitted by {Email} with {Sentiment} sentiment", 
                request.Email, sentimentResult.Sentiment);

            return Ok(new 
            { 
                success = true, 
                message = "Contact form submitted successfully",
                sentiment = sentimentResult.Sentiment,
                confidence = sentimentResult.ConfidenceScore
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error submitting contact form");
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }

    // GET: api/contact
    [HttpGet]
    public async Task<IActionResult> GetContacts([FromQuery] int page = 1, [FromQuery] int limit = 10)
    {
        try
        {
            var skip = (page - 1) * limit;
            var filter = Builders<Contact>.Filter.Empty;
            var sort = Builders<Contact>.Sort.Descending(x => x.CreatedAt);

            var contacts = await _contacts
                .Find(filter)
                .Sort(sort)
                .Skip(skip)
                .Limit(limit)
                .ToListAsync();

            var total = await _contacts.CountDocumentsAsync(filter);

            return Ok(new
            {
                success = true,
                data = contacts,
                pagination = new
                {
                    page,
                    limit,
                    total,
                    totalPages = (int)Math.Ceiling((double)total / limit)
                }
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving contacts");
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }

    // GET: api/contact/{id}
    [HttpGet("{id}")]
    public async Task<IActionResult> GetContact(string id)
    {
        try
        {
            var filter = Builders<Contact>.Filter.Eq(x => x.Id, id);
            var contact = await _contacts.Find(filter).FirstOrDefaultAsync();

            if (contact == null)
            {
                return NotFound(new { success = false, error = "Contact not found" });
            }

            return Ok(new { success = true, data = contact });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving contact {Id}", id);
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }

    // PUT: api/contact/{id}/read
    [HttpPut("{id}/read")]
    public async Task<IActionResult> MarkAsRead(string id)
    {
        try
        {
            var filter = Builders<Contact>.Filter.Eq(x => x.Id, id);
            var update = Builders<Contact>.Update.Set(x => x.IsRead, true);

            var result = await _contacts.UpdateOneAsync(filter, update);

            if (result.MatchedCount == 0)
            {
                return NotFound(new { success = false, error = "Contact not found" });
            }

            return Ok(new { success = true, message = "Contact marked as read" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error marking contact {Id} as read", id);
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }

    // PUT: api/contact/{id}/replied
    [HttpPut("{id}/replied")]
    public async Task<IActionResult> MarkAsReplied(string id)
    {
        try
        {
            var filter = Builders<Contact>.Filter.Eq(x => x.Id, id);
            var update = Builders<Contact>.Update.Set(x => x.IsReplied, true);

            var result = await _contacts.UpdateOneAsync(filter, update);

            if (result.MatchedCount == 0)
            {
                return NotFound(new { success = false, error = "Contact not found" });
            }

            return Ok(new { success = true, message = "Contact marked as replied" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error marking contact {Id} as replied", id);
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }

    // GET: api/contact/analytics
    [HttpGet("analytics")]
    public async Task<IActionResult> GetContactAnalytics()
    {
        try
        {
            var totalContacts = await _contacts.CountDocumentsAsync(Builders<Contact>.Filter.Empty);
            var unreadContacts = await _contacts.CountDocumentsAsync(Builders<Contact>.Filter.Eq(x => x.IsRead, false));
            var repliedContacts = await _contacts.CountDocumentsAsync(Builders<Contact>.Filter.Eq(x => x.IsReplied, true));

            // Sentiment analysis
            var positiveContacts = await _contacts.CountDocumentsAsync(
                Builders<Contact>.Filter.Eq(x => x.Sentiment, "positive"));
            var negativeContacts = await _contacts.CountDocumentsAsync(
                Builders<Contact>.Filter.Eq(x => x.Sentiment, "negative"));
            var neutralContacts = await _contacts.CountDocumentsAsync(
                Builders<Contact>.Filter.Eq(x => x.Sentiment, "neutral"));

            // Recent activity
            var recentContacts = await _contacts
                .Find(Builders<Contact>.Filter.Empty)
                .Sort(Builders<Contact>.Sort.Descending(x => x.CreatedAt))
                .Limit(5)
                .ToListAsync();

            return Ok(new
            {
                success = true,
                data = new
                {
                    total = totalContacts,
                    unread = unreadContacts,
                    replied = repliedContacts,
                    sentiment = new
                    {
                        positive = positiveContacts,
                        negative = negativeContacts,
                        neutral = neutralContacts
                    },
                    recent = recentContacts
                }
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving contact analytics");
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }

    private string GetClientIpAddress()
    {
        var forwardedHeader = Request.Headers["X-Forwarded-For"].FirstOrDefault();
        if (!string.IsNullOrEmpty(forwardedHeader))
        {
            return forwardedHeader.Split(',')[0].Trim();
        }

        return HttpContext.Connection.RemoteIpAddress?.ToString() ?? "Unknown";
    }
}

public class ContactFormRequest
{
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Subject { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
} 