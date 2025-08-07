using Microsoft.EntityFrameworkCore;
using PortfolioBackend.Models;

namespace PortfolioBackend.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<Project> Projects { get; set; }
    public DbSet<ResumeTemplate> ResumeTemplates { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure Project entity
        modelBuilder.Entity<Project>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Title).IsRequired().HasMaxLength(200);
            entity.Property(e => e.Description).IsRequired();
            entity.Property(e => e.ImageUrl).HasMaxLength(500);
            entity.Property(e => e.DemoUrl).HasMaxLength(500);
            entity.Property(e => e.GitHubUrl).HasMaxLength(500);
            
            // Configure Tags as JSON array
            entity.Property(e => e.Tags)
                .HasConversion(
                    v => string.Join(',', v),
                    v => v.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList()
                );
        });

        // Configure ResumeTemplate entity
        modelBuilder.Entity<ResumeTemplate>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Type).IsRequired().HasMaxLength(100);
            entity.Property(e => e.Content).IsRequired();
            entity.Property(e => e.Description).HasMaxLength(500);
            
            // Add index for active templates
            entity.HasIndex(e => new { e.Type, e.IsActive });
        });

        // Seed sample data
        SeedData(modelBuilder);
    }

    private void SeedData(ModelBuilder modelBuilder)
    {
        // Seed Projects
        modelBuilder.Entity<Project>().HasData(
            new Project
            {
                Id = 1,
                Title = "AI-Powered Portfolio Website",
                Description = "A full-stack portfolio website built with React, ASP.NET Core, and Azure services. Features include AI-powered chatbot, sentiment analysis, and real-time analytics.",
                Tags = new List<string> { "React", "ASP.NET Core", "Azure", "AI", "TypeScript" },
                ImageUrl = "https://portfoliostorage.blob.core.windows.net/images/portfolio-website.jpg",
                DemoUrl = "https://nicolette-portfolio.azurestaticapps.net",
                GitHubUrl = "https://github.com/nicolette-mashaba/portfolio-website-ai"
            },
            new Project
            {
                Id = 2,
                Title = "E-commerce Platform",
                Description = "Modern e-commerce platform with React frontend and .NET backend. Includes payment processing, inventory management, and admin dashboard.",
                Tags = new List<string> { "React", "ASP.NET Core", "SQL Server", "Stripe", "Bootstrap" },
                ImageUrl = "https://portfoliostorage.blob.core.windows.net/images/ecommerce-platform.jpg",
                DemoUrl = "https://demo-ecommerce.azurewebsites.net",
                GitHubUrl = "https://github.com/nicolette-mashaba/ecommerce-platform"
            },
            new Project
            {
                Id = 3,
                Title = "Data Analytics Dashboard",
                Description = "Real-time analytics dashboard with MongoDB, React, and D3.js. Features interactive charts, data filtering, and export capabilities.",
                Tags = new List<string> { "React", "MongoDB", "D3.js", "Node.js", "Express" },
                ImageUrl = "https://portfoliostorage.blob.core.windows.net/images/analytics-dashboard.jpg",
                DemoUrl = "https://analytics-demo.azurewebsites.net",
                GitHubUrl = "https://github.com/nicolette-mashaba/analytics-dashboard"
            }
        );
        
        // Seed Resume Templates
        modelBuilder.Entity<ResumeTemplate>().HasData(
            new ResumeTemplate
            {
                Id = 1,
                Type = "Technical",
                Description = "Technical resume template focused on programming skills and projects",
                Content = "Technical resume template with emphasis on programming languages, frameworks, and technical projects. Includes sections for technical skills, key projects, and certifications.",
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            },
            new ResumeTemplate
            {
                Id = 2,
                Type = "General",
                Description = "General resume template suitable for various industries",
                Content = "General resume template with professional experience, education, and skills sections. Suitable for various industries and positions.",
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            }
        );
    }
} 