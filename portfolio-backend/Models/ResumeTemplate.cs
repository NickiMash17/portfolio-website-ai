using System.ComponentModel.DataAnnotations;

namespace PortfolioBackend.Models;

public class ResumeTemplate
{
    public int Id { get; set; }
    
    [Required]
    [StringLength(100)]
    public string Type { get; set; } = string.Empty;
    
    [Required]
    public string Content { get; set; } = string.Empty;
    
    [StringLength(500)]
    public string Description { get; set; } = string.Empty;
    
    public bool IsActive { get; set; } = true;
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    public DateTime? UpdatedAt { get; set; }
} 