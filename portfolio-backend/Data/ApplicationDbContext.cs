using Microsoft.EntityFrameworkCore;
using PortfolioBackend.Models;

namespace PortfolioBackend.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Project> Projects { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure Project entity
        modelBuilder.Entity<Project>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Title).IsRequired().HasMaxLength(200);
            entity.Property(e => e.Description).IsRequired().HasMaxLength(2000);
            entity.Property(e => e.Tech).IsRequired();
            entity.Property(e => e.Features).IsRequired();
            entity.Property(e => e.Gradient).IsRequired().HasMaxLength(100);
            entity.Property(e => e.DemoUrl).IsRequired().HasMaxLength(500);
            entity.Property(e => e.GithubUrl).IsRequired().HasMaxLength(500);
            entity.Property(e => e.Metrics).IsRequired();
            entity.Property(e => e.Category).IsRequired().HasMaxLength(100);
            entity.Property(e => e.ImageUrl).HasMaxLength(500);
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("GETUTCDATE()");
            entity.Property(e => e.UpdatedAt).HasDefaultValueSql("GETUTCDATE()");
            entity.Property(e => e.IsActive).HasDefaultValue(true);
            entity.Property(e => e.SortOrder).HasDefaultValue(0);

            // Add index for better performance
            entity.HasIndex(e => e.Category);
            entity.HasIndex(e => e.IsActive);
            entity.HasIndex(e => e.SortOrder);
        });

        // Seed initial data
        SeedData(modelBuilder);
    }

    private void SeedData(ModelBuilder modelBuilder)
    {
        var projects = new[]
        {
            new Project
            {
                Id = 1,
                Title = "AI-Powered E-Commerce Platform",
                Description = "Full-stack e-commerce solution with AI-driven product recommendations, real-time inventory management, and intelligent chatbot support.",
                Tech = "[\"C#\", \"ASP.NET Core\", \"React\", \"TypeScript\", \"Azure AI\", \"SQL Server\", \"MongoDB\"]",
                Features = "[\"Machine Learning Recommendations\", \"Real-time Chat\", \"Payment Integration\", \"Admin Dashboard\", \"Mobile Responsive\"]",
                Gradient = "from-purple-600 via-blue-600 to-teal-500",
                DemoUrl = "https://demo-ecommerce.azurewebsites.net",
                GithubUrl = "https://github.com/NickiMash17/ai-ecommerce",
                Metrics = "{\"users\": \"15K+\", \"accuracy\": \"94%\", \"response\": \"<150ms\"}",
                Category = "Full Stack + AI",
                ImageUrl = "https://myportfolio.blob.core.windows.net/images/project1.jpg",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                IsActive = true,
                SortOrder = 1
            },
            new Project
            {
                Id = 2,
                Title = "Cloud-Native Microservices Architecture",
                Description = "Scalable microservices deployed on Azure with comprehensive DevOps automation, monitoring, and real-time analytics.",
                Tech = "[\"C#\", \".NET Core\", \"Docker\", \"Azure Kubernetes\", \"Azure DevOps\", \"Redis\", \"CosmosDB\"]",
                Features = "[\"Auto-scaling\", \"CI/CD Pipeline\", \"Health Monitoring\", \"Load Balancing\", \"Service Mesh\"]",
                Gradient = "from-blue-600 via-indigo-600 to-purple-500",
                DemoUrl = "https://demo-microservices.azurewebsites.net",
                GithubUrl = "https://github.com/NickiMash17/microservices-arch",
                Metrics = "{\"uptime\": \"99.9%\", \"services\": \"12\", \"requests\": \"1M+\"}",
                Category = "Cloud Architecture",
                ImageUrl = "https://myportfolio.blob.core.windows.net/images/project2.jpg",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                IsActive = true,
                SortOrder = 2
            },
            new Project
            {
                Id = 3,
                Title = "Real-Time Collaboration Hub",
                Description = "Modern collaboration platform with real-time document editing, video conferencing, and AI-powered meeting summaries.",
                Tech = "[\"React\", \"TypeScript\", \"SignalR\", \"Azure SignalR\", \"Vite\", \"Tailwind CSS\"]",
                Features = "[\"Real-time Collaboration\", \"Video Conferencing\", \"AI Summaries\", \"File Sharing\", \"Team Management\"]",
                Gradient = "from-green-500 via-teal-500 to-blue-500",
                DemoUrl = "https://demo-collaboration.azurewebsites.net",
                GithubUrl = "https://github.com/NickiMash17/collaboration-hub",
                Metrics = "{\"teams\": \"500+\", \"messages\": \"50K+\", \"satisfaction\": \"4.9/5\"}",
                Category = "Real-Time Apps",
                ImageUrl = "https://myportfolio.blob.core.windows.net/images/project3.jpg",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                IsActive = true,
                SortOrder = 3
            },
            new Project
            {
                Id = 4,
                Title = "Intelligent Data Analytics Dashboard",
                Description = "Advanced analytics platform with machine learning insights, predictive modeling, and interactive data visualizations.",
                Tech = "[\"C#\", \"Python\", \"Azure ML\", \"Power BI\", \"SQL Server\", \"MongoDB\"]",
                Features = "[\"Predictive Analytics\", \"Custom Dashboards\", \"Data Export\", \"Automated Reports\", \"ML Models\"]",
                Gradient = "from-orange-500 via-red-500 to-pink-500",
                DemoUrl = "https://demo-analytics.azurewebsites.net",
                GithubUrl = "https://github.com/NickiMash17/data-analytics",
                Metrics = "{\"datasets\": \"100+\", \"predictions\": \"95%\", \"insights\": \"1K+\"}",
                Category = "Data Science + AI",
                ImageUrl = "https://myportfolio.blob.core.windows.net/images/project4.jpg",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                IsActive = true,
                SortOrder = 4
            }
        };

        modelBuilder.Entity<Project>().HasData(projects);
    }
} 