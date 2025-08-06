using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using PortfolioBackend.Controllers;
using PortfolioBackend.Data;
using PortfolioBackend.Models;
using Xunit;

namespace PortfolioBackend.Tests;

public class ProjectsControllerTests
{
    private readonly Mock<ILogger<ProjectsController>> _mockLogger;
    private readonly DbContextOptions<ApplicationDbContext> _options;
    
    public ProjectsControllerTests()
    {
        _mockLogger = new Mock<ILogger<ProjectsController>>();
        _options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
            .Options;
    }
    
    [Fact]
    public async Task GetProjects_ReturnsOkResult()
    {
        // Arrange
        using var context = new ApplicationDbContext(_options);
        var controller = new ProjectsController(context, _mockLogger.Object);
        
        // Add test data
        var project = new Project
        {
            Title = "Test Project",
            Description = "Test Description",
            Tags = new List<string> { "Test", "C#" },
            IsActive = true
        };
        context.Projects.Add(project);
        await context.SaveChangesAsync();
        
        // Act
        var result = await controller.GetProjects();
        
        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        var projects = Assert.IsType<List<Project>>(okResult.Value);
        Assert.Single(projects);
        Assert.Equal("Test Project", projects[0].Title);
    }
    
    [Fact]
    public async Task GetProject_WithValidId_ReturnsOkResult()
    {
        // Arrange
        using var context = new ApplicationDbContext(_options);
        var controller = new ProjectsController(context, _mockLogger.Object);
        
        var project = new Project
        {
            Title = "Test Project",
            Description = "Test Description",
            Tags = new List<string> { "Test", "C#" },
            IsActive = true
        };
        context.Projects.Add(project);
        await context.SaveChangesAsync();
        
        // Act
        var result = await controller.GetProject(project.Id);
        
        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        var returnedProject = Assert.IsType<Project>(okResult.Value);
        Assert.Equal("Test Project", returnedProject.Title);
    }
    
    [Fact]
    public async Task GetProject_WithInvalidId_ReturnsNotFound()
    {
        // Arrange
        using var context = new ApplicationDbContext(_options);
        var controller = new ProjectsController(context, _mockLogger.Object);
        
        // Act
        var result = await controller.GetProject(999);
        
        // Assert
        Assert.IsType<NotFoundObjectResult>(result);
    }
    
    [Fact]
    public async Task GetProjectsByTag_ReturnsFilteredProjects()
    {
        // Arrange
        using var context = new ApplicationDbContext(_options);
        var controller = new ProjectsController(context, _mockLogger.Object);
        
        var project1 = new Project
        {
            Title = "C# Project",
            Description = "C# Description",
            Tags = new List<string> { "C#", "ASP.NET" },
            IsActive = true
        };
        
        var project2 = new Project
        {
            Title = "React Project",
            Description = "React Description",
            Tags = new List<string> { "React", "TypeScript" },
            IsActive = true
        };
        
        context.Projects.AddRange(project1, project2);
        await context.SaveChangesAsync();
        
        // Act
        var result = await controller.GetProjectsByTag("C#");
        
        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        var projects = Assert.IsType<List<Project>>(okResult.Value);
        Assert.Single(projects);
        Assert.Equal("C# Project", projects[0].Title);
    }
    
    [Fact]
    public async Task CreateProject_WithValidData_ReturnsCreatedResult()
    {
        // Arrange
        using var context = new ApplicationDbContext(_options);
        var controller = new ProjectsController(context, _mockLogger.Object);
        
        var request = new CreateProjectRequest
        {
            Title = "New Project",
            Description = "New Description",
            Tags = new List<string> { "New", "Test" },
            DemoUrl = "https://demo.com",
            GitHubUrl = "https://github.com/test"
        };
        
        // Act
        var result = await controller.CreateProject(request);
        
        // Assert
        var createdResult = Assert.IsType<CreatedAtActionResult>(result);
        var project = Assert.IsType<Project>(createdResult.Value);
        Assert.Equal("New Project", project.Title);
    }
    
    [Fact]
    public async Task UpdateProject_WithValidId_ReturnsOkResult()
    {
        // Arrange
        using var context = new ApplicationDbContext(_options);
        var controller = new ProjectsController(context, _mockLogger.Object);
        
        var project = new Project
        {
            Title = "Original Title",
            Description = "Original Description",
            Tags = new List<string> { "Original" },
            IsActive = true
        };
        context.Projects.Add(project);
        await context.SaveChangesAsync();
        
        var request = new UpdateProjectRequest
        {
            Title = "Updated Title",
            Description = "Updated Description"
        };
        
        // Act
        var result = await controller.UpdateProject(project.Id, request);
        
        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        var updatedProject = Assert.IsType<Project>(okResult.Value);
        Assert.Equal("Updated Title", updatedProject.Title);
    }
    
    [Fact]
    public async Task DeleteProject_WithValidId_ReturnsOkResult()
    {
        // Arrange
        using var context = new ApplicationDbContext(_options);
        var controller = new ProjectsController(context, _mockLogger.Object);
        
        var project = new Project
        {
            Title = "Project to Delete",
            Description = "Description",
            Tags = new List<string> { "Test" },
            IsActive = true
        };
        context.Projects.Add(project);
        await context.SaveChangesAsync();
        
        // Act
        var result = await controller.DeleteProject(project.Id);
        
        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        var message = Assert.IsType<Anonymous>(okResult.Value);
        Assert.Equal("Project deleted successfully", message.message);
        
        // Verify soft delete
        var deletedProject = await context.Projects.FindAsync(project.Id);
        Assert.False(deletedProject!.IsActive);
    }
}

// Helper class for anonymous objects
public class Anonymous
{
    public string message { get; set; } = string.Empty;
} 