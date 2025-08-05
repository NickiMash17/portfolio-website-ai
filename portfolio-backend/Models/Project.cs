using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PortfolioBackend.Models;

public class Project
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(2000)]
    public string Description { get; set; } = string.Empty;
    
    [Required]
    public string Tech { get; set; } = string.Empty; // JSON array of technologies
    
    [Required]
    public string Features { get; set; } = string.Empty; // JSON array of features
    
    [Required]
    [MaxLength(100)]
    public string Gradient { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(500)]
    public string DemoUrl { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(500)]
    public string GithubUrl { get; set; } = string.Empty;
    
    [Required]
    public string Metrics { get; set; } = string.Empty; // JSON object of metrics
    
    [Required]
    [MaxLength(100)]
    public string Category { get; set; } = string.Empty;
    
    [MaxLength(500)]
    public string? ImageUrl { get; set; }
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    
    public bool IsActive { get; set; } = true;
    
    public int SortOrder { get; set; } = 0;
} 