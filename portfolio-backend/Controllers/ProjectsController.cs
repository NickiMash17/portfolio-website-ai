using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioBackend.Data;
using PortfolioBackend.Models;
using System.Text.Json;

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

    // GET: api/projects
    [HttpGet]
    public async Task<ActionResult<IEnumerable<object>>> GetProjects()
    {
        try
        {
            var projects = await _context.Projects
                .Where(p => p.IsActive)
                .OrderBy(p => p.SortOrder)
                .Select(p => new
                {
                    id = p.Id.ToString(),
                    title = p.Title,
                    description = p.Description,
                    tech = JsonSerializer.Deserialize<string[]>(p.Tech),
                    features = JsonSerializer.Deserialize<string[]>(p.Features),
                    gradient = p.Gradient,
                    demoUrl = p.DemoUrl,
                    githubUrl = p.GithubUrl,
                    metrics = JsonSerializer.Deserialize<Dictionary<string, string>>(p.Metrics),
                    category = p.Category,
                    imageUrl = p.ImageUrl,
                    createdAt = p.CreatedAt,
                    updatedAt = p.UpdatedAt
                })
                .ToListAsync();

            return Ok(new { success = true, data = projects });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving projects");
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }

    // GET: api/projects/5
    [HttpGet("{id}")]
    public async Task<ActionResult<object>> GetProject(int id)
    {
        try
        {
            var project = await _context.Projects
                .Where(p => p.Id == id && p.IsActive)
                .Select(p => new
                {
                    id = p.Id.ToString(),
                    title = p.Title,
                    description = p.Description,
                    tech = JsonSerializer.Deserialize<string[]>(p.Tech),
                    features = JsonSerializer.Deserialize<string[]>(p.Features),
                    gradient = p.Gradient,
                    demoUrl = p.DemoUrl,
                    githubUrl = p.GithubUrl,
                    metrics = JsonSerializer.Deserialize<Dictionary<string, string>>(p.Metrics),
                    category = p.Category,
                    imageUrl = p.ImageUrl,
                    createdAt = p.CreatedAt,
                    updatedAt = p.UpdatedAt
                })
                .FirstOrDefaultAsync();

            if (project == null)
            {
                return NotFound(new { success = false, error = "Project not found" });
            }

            return Ok(new { success = true, data = project });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving project {Id}", id);
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }

    // GET: api/projects/category/{category}
    [HttpGet("category/{category}")]
    public async Task<ActionResult<IEnumerable<object>>> GetProjectsByCategory(string category)
    {
        try
        {
            var projects = await _context.Projects
                .Where(p => p.Category.ToLower() == category.ToLower() && p.IsActive)
                .OrderBy(p => p.SortOrder)
                .Select(p => new
                {
                    id = p.Id.ToString(),
                    title = p.Title,
                    description = p.Description,
                    tech = JsonSerializer.Deserialize<string[]>(p.Tech),
                    features = JsonSerializer.Deserialize<string[]>(p.Features),
                    gradient = p.Gradient,
                    demoUrl = p.DemoUrl,
                    githubUrl = p.GithubUrl,
                    metrics = JsonSerializer.Deserialize<Dictionary<string, string>>(p.Metrics),
                    category = p.Category,
                    imageUrl = p.ImageUrl,
                    createdAt = p.CreatedAt,
                    updatedAt = p.UpdatedAt
                })
                .ToListAsync();

            return Ok(new { success = true, data = projects });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving projects by category {Category}", category);
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }

    // POST: api/projects
    [HttpPost]
    public async Task<ActionResult<object>> CreateProject([FromBody] CreateProjectRequest request)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { success = false, error = "Invalid request data" });
            }

            var project = new Project
            {
                Title = request.Title,
                Description = request.Description,
                Tech = JsonSerializer.Serialize(request.Tech),
                Features = JsonSerializer.Serialize(request.Features),
                Gradient = request.Gradient,
                DemoUrl = request.DemoUrl,
                GithubUrl = request.GithubUrl,
                Metrics = JsonSerializer.Serialize(request.Metrics),
                Category = request.Category,
                ImageUrl = request.ImageUrl,
                SortOrder = request.SortOrder,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                IsActive = true
            };

            _context.Projects.Add(project);
            await _context.SaveChangesAsync();

            var createdProject = new
            {
                id = project.Id.ToString(),
                title = project.Title,
                description = project.Description,
                tech = request.Tech,
                features = request.Features,
                gradient = project.Gradient,
                demoUrl = project.DemoUrl,
                githubUrl = project.GithubUrl,
                metrics = request.Metrics,
                category = project.Category,
                imageUrl = project.ImageUrl,
                createdAt = project.CreatedAt,
                updatedAt = project.UpdatedAt
            };

            return CreatedAtAction(nameof(GetProject), new { id = project.Id }, 
                new { success = true, data = createdProject });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating project");
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }

    // PUT: api/projects/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProject(int id, [FromBody] UpdateProjectRequest request)
    {
        try
        {
            var project = await _context.Projects.FindAsync(id);
            if (project == null)
            {
                return NotFound(new { success = false, error = "Project not found" });
            }

            project.Title = request.Title ?? project.Title;
            project.Description = request.Description ?? project.Description;
            project.Tech = request.Tech != null ? JsonSerializer.Serialize(request.Tech) : project.Tech;
            project.Features = request.Features != null ? JsonSerializer.Serialize(request.Features) : project.Features;
            project.Gradient = request.Gradient ?? project.Gradient;
            project.DemoUrl = request.DemoUrl ?? project.DemoUrl;
            project.GithubUrl = request.GithubUrl ?? project.GithubUrl;
            project.Metrics = request.Metrics != null ? JsonSerializer.Serialize(request.Metrics) : project.Metrics;
            project.Category = request.Category ?? project.Category;
            project.ImageUrl = request.ImageUrl ?? project.ImageUrl;
            project.SortOrder = request.SortOrder ?? project.SortOrder;
            project.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            return Ok(new { success = true, message = "Project updated successfully" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating project {Id}", id);
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }

    // DELETE: api/projects/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProject(int id)
    {
        try
        {
            var project = await _context.Projects.FindAsync(id);
            if (project == null)
            {
                return NotFound(new { success = false, error = "Project not found" });
            }

            project.IsActive = false;
            project.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();

            return Ok(new { success = true, message = "Project deleted successfully" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting project {Id}", id);
            return StatusCode(500, new { success = false, error = "Internal server error" });
        }
    }
}

// Request models
public class CreateProjectRequest
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string[] Tech { get; set; } = Array.Empty<string>();
    public string[] Features { get; set; } = Array.Empty<string>();
    public string Gradient { get; set; } = string.Empty;
    public string DemoUrl { get; set; } = string.Empty;
    public string GithubUrl { get; set; } = string.Empty;
    public Dictionary<string, string> Metrics { get; set; } = new();
    public string Category { get; set; } = string.Empty;
    public string? ImageUrl { get; set; }
    public int SortOrder { get; set; } = 0;
}

public class UpdateProjectRequest
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public string[]? Tech { get; set; }
    public string[]? Features { get; set; }
    public string? Gradient { get; set; }
    public string? DemoUrl { get; set; }
    public string? GithubUrl { get; set; }
    public Dictionary<string, string>? Metrics { get; set; }
    public string? Category { get; set; }
    public string? ImageUrl { get; set; }
    public int? SortOrder { get; set; }
} 