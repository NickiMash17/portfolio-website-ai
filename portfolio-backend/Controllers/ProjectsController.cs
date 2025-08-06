using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioBackend.Data;
using PortfolioBackend.Models;
using System.ComponentModel.DataAnnotations;

namespace PortfolioBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<ProjectsController> _logger;
    
    public ProjectsController(ApplicationDbContext context, ILogger<ProjectsController> logger)
    {
        _context = context;
        _logger = logger;
    }
    
    /// <summary>
    /// Get all active projects
    /// </summary>
    [HttpGet]
    public async Task<IActionResult> GetProjects()
    {
        try
        {
            var projects = await _context.Projects
                .Where(p => p.IsActive)
                .OrderByDescending(p => p.CreatedAt)
                .ToListAsync();
            
            _logger.LogInformation("Retrieved {Count} projects", projects.Count);
            
            return Ok(projects);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving projects");
            return StatusCode(500, new { error = "Failed to retrieve projects" });
        }
    }
    
    /// <summary>
    /// Get a specific project by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<IActionResult> GetProject(int id)
    {
        try
        {
            var project = await _context.Projects
                .FirstOrDefaultAsync(p => p.Id == id && p.IsActive);
            
            if (project == null)
            {
                return NotFound(new { error = "Project not found" });
            }
            
            return Ok(project);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving project {Id}", id);
            return StatusCode(500, new { error = "Failed to retrieve project" });
        }
    }
    
    /// <summary>
    /// Create a new project (admin only)
    /// </summary>
    [HttpPost]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> CreateProject([FromBody] CreateProjectRequest request)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var project = new Project
            {
                Title = request.Title,
                Description = request.Description,
                Tags = request.Tags,
                ImageUrl = request.ImageUrl,
                DemoUrl = request.DemoUrl,
                GitHubUrl = request.GitHubUrl,
                CreatedAt = DateTime.UtcNow,
                IsActive = true
            };
            
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();
            
            _logger.LogInformation("Created project: {Title}", project.Title);
            
            return CreatedAtAction(nameof(GetProject), new { id = project.Id }, project);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating project");
            return StatusCode(500, new { error = "Failed to create project" });
        }
    }
    
    /// <summary>
    /// Update an existing project (admin only)
    /// </summary>
    [HttpPut("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> UpdateProject(int id, [FromBody] UpdateProjectRequest request)
    {
        try
        {
            var project = await _context.Projects.FindAsync(id);
            
            if (project == null)
            {
                return NotFound(new { error = "Project not found" });
            }
            
            project.Title = request.Title ?? project.Title;
            project.Description = request.Description ?? project.Description;
            project.Tags = request.Tags ?? project.Tags;
            project.ImageUrl = request.ImageUrl ?? project.ImageUrl;
            project.DemoUrl = request.DemoUrl ?? project.DemoUrl;
            project.GitHubUrl = request.GitHubUrl ?? project.GitHubUrl;
            project.UpdatedAt = DateTime.UtcNow;
            
            await _context.SaveChangesAsync();
            
            _logger.LogInformation("Updated project: {Title}", project.Title);
            
            return Ok(project);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating project {Id}", id);
            return StatusCode(500, new { error = "Failed to update project" });
        }
    }
    
    /// <summary>
    /// Delete a project (admin only)
    /// </summary>
    [HttpDelete("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> DeleteProject(int id)
    {
        try
        {
            var project = await _context.Projects.FindAsync(id);
            
            if (project == null)
            {
                return NotFound(new { error = "Project not found" });
            }
            
            // Soft delete - mark as inactive
            project.IsActive = false;
            project.UpdatedAt = DateTime.UtcNow;
            
            await _context.SaveChangesAsync();
            
            _logger.LogInformation("Deleted project: {Title}", project.Title);
            
            return Ok(new { message = "Project deleted successfully" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting project {Id}", id);
            return StatusCode(500, new { error = "Failed to delete project" });
        }
    }
    
    /// <summary>
    /// Get projects by tag
    /// </summary>
    [HttpGet("tag/{tag}")]
    public async Task<IActionResult> GetProjectsByTag(string tag)
    {
        try
        {
            var projects = await _context.Projects
                .Where(p => p.IsActive && p.Tags.Contains(tag))
                .OrderByDescending(p => p.CreatedAt)
                .ToListAsync();
            
            return Ok(projects);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving projects by tag {Tag}", tag);
            return StatusCode(500, new { error = "Failed to retrieve projects" });
        }
    }
}

public class CreateProjectRequest
{
    [Required]
    [StringLength(200)]
    public string Title { get; set; } = string.Empty;
    
    [Required]
    public string Description { get; set; } = string.Empty;
    
    public List<string> Tags { get; set; } = new();
    
    [StringLength(500)]
    public string ImageUrl { get; set; } = string.Empty;
    
    [StringLength(500)]
    public string DemoUrl { get; set; } = string.Empty;
    
    [StringLength(500)]
    public string GitHubUrl { get; set; } = string.Empty;
}

public class UpdateProjectRequest
{
    [StringLength(200)]
    public string? Title { get; set; }
    
    public string? Description { get; set; }
    
    public List<string>? Tags { get; set; }
    
    [StringLength(500)]
    public string? ImageUrl { get; set; }
    
    [StringLength(500)]
    public string? DemoUrl { get; set; }
    
    [StringLength(500)]
    public string? GitHubUrl { get; set; }
} 