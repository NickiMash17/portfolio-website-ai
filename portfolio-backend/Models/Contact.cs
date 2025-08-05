using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PortfolioBackend.Models;

public class Contact
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = string.Empty;
    
    [BsonElement("name")]
    public string Name { get; set; } = string.Empty;
    
    [BsonElement("email")]
    public string Email { get; set; } = string.Empty;
    
    [BsonElement("subject")]
    public string Subject { get; set; } = string.Empty;
    
    [BsonElement("message")]
    public string Message { get; set; } = string.Empty;
    
    [BsonElement("sentiment")]
    public string? Sentiment { get; set; }
    
    [BsonElement("sentimentScore")]
    public double? SentimentScore { get; set; }
    
    [BsonElement("ipAddress")]
    public string? IpAddress { get; set; }
    
    [BsonElement("userAgent")]
    public string? UserAgent { get; set; }
    
    [BsonElement("createdAt")]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    [BsonElement("isRead")]
    public bool IsRead { get; set; } = false;
    
    [BsonElement("isReplied")]
    public bool IsReplied { get; set; } = false;
} 