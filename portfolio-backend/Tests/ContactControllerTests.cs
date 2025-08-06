using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using MongoDB.Driver;
using PortfolioBackend.Controllers;
using PortfolioBackend.Data;
using PortfolioBackend.Models.Mongo;
using PortfolioBackend.Services;
using Xunit;

namespace PortfolioBackend.Tests;

public class ContactControllerTests
{
    private readonly Mock<ILogger<ContactController>> _mockLogger;
    private readonly Mock<MongoDbContext> _mockMongoContext;
    private readonly Mock<IAzureCognitiveService> _mockCognitiveService;
    private readonly Mock<IMongoCollection<ContactMessage>> _mockContactCollection;
    
    public ContactControllerTests()
    {
        _mockLogger = new Mock<ILogger<ContactController>>();
        _mockMongoContext = new Mock<MongoDbContext>();
        _mockCognitiveService = new Mock<IAzureCognitiveService>();
        _mockContactCollection = new Mock<IMongoCollection<ContactMessage>>();
        
        _mockMongoContext.Setup(x => x.ContactMessages).Returns(_mockContactCollection.Object);
    }
    
    [Fact]
    public async Task SubmitContact_WithValidData_ReturnsOkResult()
    {
        // Arrange
        var controller = new ContactController(_mockMongoContext.Object, _mockCognitiveService.Object, _mockLogger.Object);
        
        var request = new ContactMessageRequest
        {
            Name = "John Doe",
            Email = "john@example.com",
            Message = "Great portfolio! I love your work."
        };
        
        _mockCognitiveService
            .Setup(x => x.AnalyzeSentimentAsync(It.IsAny<string>()))
            .ReturnsAsync(("Positive", 0.8));
        
        _mockContactCollection
            .Setup(x => x.InsertOneAsync(It.IsAny<ContactMessage>(), null, default))
            .Returns(Task.CompletedTask);
        
        // Act
        var result = await controller.SubmitContact(request);
        
        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        var response = Assert.IsType<Anonymous>(okResult.Value);
        Assert.Equal("Contact message submitted successfully", response.message);
        Assert.Equal("Positive", response.sentiment);
        Assert.Equal(0.8, response.sentimentScore);
    }
    
    [Fact]
    public async Task SubmitContact_WithInvalidData_ReturnsBadRequest()
    {
        // Arrange
        var controller = new ContactController(_mockMongoContext.Object, _mockCognitiveService.Object, _mockLogger.Object);
        
        var request = new ContactMessageRequest
        {
            Name = "", // Invalid - empty name
            Email = "invalid-email", // Invalid email
            Message = "" // Invalid - empty message
        };
        
        // Act
        var result = await controller.SubmitContact(request);
        
        // Assert
        Assert.IsType<BadRequestObjectResult>(result);
    }
    
    [Fact]
    public async Task SubmitContact_WhenCognitiveServiceFails_ReturnsFallback()
    {
        // Arrange
        var controller = new ContactController(_mockMongoContext.Object, _mockCognitiveService.Object, _mockLogger.Object);
        
        var request = new ContactMessageRequest
        {
            Name = "John Doe",
            Email = "john@example.com",
            Message = "Test message"
        };
        
        _mockCognitiveService
            .Setup(x => x.AnalyzeSentimentAsync(It.IsAny<string>()))
            .ThrowsAsync(new Exception("Cognitive service error"));
        
        _mockContactCollection
            .Setup(x => x.InsertOneAsync(It.IsAny<ContactMessage>(), null, default))
            .Returns(Task.CompletedTask);
        
        // Act
        var result = await controller.SubmitContact(request);
        
        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        var response = Assert.IsType<Anonymous>(okResult.Value);
        Assert.Equal("Contact message submitted successfully", response.message);
        Assert.Equal("Neutral", response.sentiment); // Fallback sentiment
    }
    
    [Fact]
    public async Task GetContactMessages_ReturnsMessages()
    {
        // Arrange
        var controller = new ContactController(_mockMongoContext.Object, _mockCognitiveService.Object, _mockLogger.Object);
        
        var messages = new List<ContactMessage>
        {
            new ContactMessage
            {
                Id = "1",
                Name = "John Doe",
                Email = "john@example.com",
                Message = "Great work!",
                Sentiment = "Positive",
                SentimentScore = 0.8,
                Timestamp = DateTime.UtcNow
            },
            new ContactMessage
            {
                Id = "2",
                Name = "Jane Smith",
                Email = "jane@example.com",
                Message = "Nice portfolio",
                Sentiment = "Positive",
                SentimentScore = 0.7,
                Timestamp = DateTime.UtcNow.AddDays(-1)
            }
        };
        
        var mockCursor = new Mock<IAsyncCursor<ContactMessage>>();
        mockCursor.Setup(x => x.Current).Returns(messages);
        mockCursor.SetupSequence(x => x.MoveNext(It.IsAny<CancellationToken>()))
            .Returns(true)
            .Returns(false);
        mockCursor.SetupSequence(x => x.MoveNextAsync(It.IsAny<CancellationToken>()))
            .ReturnsAsync(true)
            .ReturnsAsync(false);
        
        _mockContactCollection
            .Setup(x => x.Find(It.IsAny<FilterDefinition<ContactMessage>>()))
            .Returns(new Mock<IFindFluent<ContactMessage, ContactMessage>>().Object);
        
        // Act
        var result = await controller.GetContactMessages();
        
        // Assert
        Assert.IsType<OkObjectResult>(result);
    }
    
    [Fact]
    public async Task GetSentimentAnalytics_ReturnsAnalytics()
    {
        // Arrange
        var controller = new ContactController(_mockMongoContext.Object, _mockCognitiveService.Object, _mockLogger.Object);
        
        var mockAggregate = new Mock<IAggregateFluent<object>>();
        var mockCursor = new Mock<IAsyncCursor<object>>();
        
        _mockContactCollection
            .Setup(x => x.Aggregate())
            .Returns(mockAggregate.Object);
        
        _mockContactCollection
            .Setup(x => x.CountDocumentsAsync(It.IsAny<FilterDefinition<ContactMessage>>(), null, default))
            .ReturnsAsync(10);
        
        // Act
        var result = await controller.GetSentimentAnalytics();
        
        // Assert
        Assert.IsType<OkObjectResult>(result);
    }
}

// Helper class for anonymous objects
public class Anonymous
{
    public string message { get; set; } = string.Empty;
    public string sentiment { get; set; } = string.Empty;
    public double sentimentScore { get; set; }
    public string id { get; set; } = string.Empty;
} 