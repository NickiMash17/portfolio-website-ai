using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PortfolioBackend.Models.Mongo;

public class ContactMessage
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = string.Empty;
    
    [BsonElement("name")]
    [BsonRequired]
    public string Name { get; set; } = string.Empty;
    
    [BsonElement("email")]
    [BsonRequired]
    public string Email { get; set; } = string.Empty;
    
    [BsonElement("message")]
    [BsonRequired]
    public string Message { get; set; } = string.Empty;
    
    [BsonElement("sentiment")]
    public string Sentiment { get; set; } = string.Empty;
    
    [BsonElement("sentimentScore")]
    public double SentimentScore { get; set; }
    
    [BsonElement("timestamp")]
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;
    
    [BsonElement("ipAddress")]
    public string? IpAddress { get; set; }
    
    [BsonElement("userAgent")]
    public string? UserAgent { get; set; }
} 