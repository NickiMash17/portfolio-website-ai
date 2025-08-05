using Microsoft.AspNetCore.Mvc;
using PortfolioBackend.Services;

namespace PortfolioBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ResumeController : ControllerBase
{
    private readonly IResumeService _resumeService;
    private readonly ILogger<ResumeController> _logger;

    public ResumeController(IResumeService resumeService, ILogger<ResumeController> logger)
    {
        _resumeService = resumeService;
        _logger = logger;
    }

    // POST: api/resume/generate
    [HttpPost("generate")]
    public async Task<IActionResult> GenerateResume([FromBody] ResumeOptions options)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { success = false, error = "Invalid request data" });
            }

            var pdfBytes = await _resumeService.GenerateResumeAsync(options);

            _logger.LogInformation("Resume generated with type: {Type}, format: {Format}", 
                options.Type, options.Format);

            return File(pdfBytes, "application/pdf", $"Nicolette_Mashaba_Resume_{options.Type}.pdf");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating resume");
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }

    // GET: api/resume/preview
    [HttpGet("preview")]
    public IActionResult GetResumePreview()
    {
        try
        {
            var preview = new
            {
                availableTypes = new[] { "Technical", "General", "Academic" },
                availableFormats = new[] { "PDF", "DOCX" },
                defaultOptions = new ResumeOptions
                {
                    Type = "Technical",
                    IncludeProjects = true,
                    IncludeCertifications = true,
                    IncludeSkills = true,
                    Format = "PDF"
                }
            };

            return Ok(new { success = true, data = preview });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting resume preview");
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }
} 