using System.ComponentModel.DataAnnotations;

namespace PortfolioBackend.Models;

public class Project
{
    public int Id { get; set; }
    
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
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    public DateTime? UpdatedAt { get; set; }
    
    public bool IsActive { get; set; } = true;
} 