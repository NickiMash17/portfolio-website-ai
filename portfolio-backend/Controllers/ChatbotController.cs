using Microsoft.AspNetCore.Mvc;
using PortfolioBackend.Services;

namespace PortfolioBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChatbotController : ControllerBase
{
    private readonly IChatbotService _chatbotService;
    private readonly ILogger<ChatbotController> _logger;

    public ChatbotController(IChatbotService chatbotService, ILogger<ChatbotController> logger)
    {
        _chatbotService = chatbotService;
        _logger = logger;
    }

    // POST: api/chatbot/message
    [HttpPost("message")]
    public async Task<IActionResult> SendMessage([FromBody] ChatbotMessageRequest request)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { success = false, error = "Invalid request data" });
            }

            var response = await _chatbotService.ProcessMessageAsync(request.Message);

            _logger.LogInformation("Chatbot message processed. Intent: {Intent}", response.Intent);

            return Ok(new
            {
                success = true,
                data = new
                {
                    id = Guid.NewGuid().ToString(),
                    text = response.Message,
                    sender = "bot",
                    timestamp = response.Timestamp,
                    type = "text",
                    intent = response.Intent
                }
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error processing chatbot message");
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }

    // GET: api/chatbot/faq
    [HttpGet("faq")]
    public IActionResult GetFAQ()
    {
        try
        {
            var faq = new[]
            {
                new { question = "What are your Azure certifications?", category = "certifications" },
                new { question = "Tell me about your C# and .NET experience", category = "backend" },
                new { question = "What frontend technologies do you use?", category = "frontend" },
                new { question = "How do you integrate AI into your projects?", category = "ai" },
                new { question = "What projects have you built?", category = "projects" },
                new { question = "How can I contact you?", category = "contact" },
                new { question = "Can you generate a resume?", category = "resume" },
                new { question = "What's your GitHub profile?", category = "github" }
            };

            return Ok(new { success = true, data = faq });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting FAQ");
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }

    // GET: api/chatbot/capabilities
    [HttpGet("capabilities")]
    public IActionResult GetCapabilities()
    {
        try
        {
            var capabilities = new
            {
                skills = new[] { "Azure", "C#", "React", "AI/ML", "DevOps" },
                topics = new[] { "Certifications", "Projects", "Experience", "Contact", "Resume" },
                languages = new[] { "English" },
                responseTime = "Real-time"
            };

            return Ok(new { success = true, data = capabilities });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting chatbot capabilities");
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }
}

public class ChatbotMessageRequest
{
    public string Message { get; set; } = string.Empty;
} 