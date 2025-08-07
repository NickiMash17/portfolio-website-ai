using Microsoft.AspNetCore.Mvc;
using PortfolioBackend.Services;

namespace PortfolioBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ResumeController : ControllerBase
{
    private readonly IResumeGenerationService _resumeService;
    private readonly ILogger<ResumeController> _logger;

    public ResumeController(IResumeGenerationService resumeService, ILogger<ResumeController> logger)
    {
        _resumeService = resumeService;
        _logger = logger;
    }

    /// <summary>
    /// Get available resume templates
    /// </summary>
    [HttpGet("templates")]
    public async Task<IActionResult> GetTemplates()
    {
        try
        {
            var templates = await _resumeService.GetAvailableTemplatesAsync();
            
            return Ok(templates);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving resume templates");
            return StatusCode(500, new { error = "Failed to retrieve templates" });
        }
    }
    
    /// <summary>
    /// Generate a PDF resume based on template type
    /// </summary>
    [HttpPost("generate")]
    public async Task<IActionResult> GenerateResume([FromBody] GenerateResumeRequest request)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pdfBytes = await _resumeService.GenerateResumeAsync(request.TemplateType, request.Data ?? new());

            _logger.LogInformation("Generated resume for template: {TemplateType}", request.TemplateType);

            return File(pdfBytes, "application/pdf", $"resume_{request.TemplateType}_{DateTime.UtcNow:yyyyMMdd}.pdf");
        }
        catch (ArgumentException ex)
        {
            _logger.LogWarning(ex, "Invalid template type: {TemplateType}", request.TemplateType);
            return BadRequest(new { error = ex.Message });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating resume");
            return StatusCode(500, new { error = "Failed to generate resume" });
        }
    }

    /// <summary>
    /// Generate a resume with custom data
    /// </summary>
    [HttpPost("generate/custom")]
    public async Task<IActionResult> GenerateCustomResume([FromBody] CustomResumeRequest request)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var data = new Dictionary<string, object>
            {
                ["name"] = request.Name,
                ["email"] = request.Email,
                ["phone"] = request.Phone,
                ["linkedin"] = request.LinkedIn,
                ["github"] = request.GitHub,
                ["summary"] = request.Summary,
                ["skills"] = request.Skills,
                ["experience"] = request.Experience,
                ["education"] = request.Education,
                ["projects"] = request.Projects
            };
            
            var pdfBytes = await _resumeService.GenerateResumeAsync(request.TemplateType, data);
            
            _logger.LogInformation("Generated custom resume for: {Name}", request.Name);
            
            return File(pdfBytes, "application/pdf", $"resume_{request.Name.Replace(" ", "_")}_{DateTime.UtcNow:yyyyMMdd}.pdf");
        }
        catch (ArgumentException ex)
        {
            _logger.LogWarning(ex, "Invalid template type: {TemplateType}", request.TemplateType);
            return BadRequest(new { error = ex.Message });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating custom resume");
            return StatusCode(500, new { error = "Failed to generate resume" });
        }
    }
}

public class GenerateResumeRequest
{
    [Required]
    public string TemplateType { get; set; } = string.Empty;
    
    public Dictionary<string, object>? Data { get; set; }
}

public class CustomResumeRequest
{
    [Required]
    public string TemplateType { get; set; } = string.Empty;
    
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;
    
    [StringLength(20)]
    public string? Phone { get; set; }
    
    [StringLength(200)]
    public string? LinkedIn { get; set; }
    
    [StringLength(200)]
    public string? GitHub { get; set; }
    
    [StringLength(500)]
    public string? Summary { get; set; }
    
    public List<string>? Skills { get; set; }
    
    public List<ExperienceItem>? Experience { get; set; }
    
    public List<EducationItem>? Education { get; set; }
    
    public List<ProjectItem>? Projects { get; set; }
}

public class ExperienceItem
{
    public string Title { get; set; } = string.Empty;
    public string Company { get; set; } = string.Empty;
    public string Duration { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}

public class EducationItem
{
    public string Degree { get; set; } = string.Empty;
    public string Institution { get; set; } = string.Empty;
    public string Year { get; set; } = string.Empty;
}

public class ProjectItem
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Technologies { get; set; } = string.Empty;
    public string? Url { get; set; }
} 