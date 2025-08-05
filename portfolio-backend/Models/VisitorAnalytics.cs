using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PortfolioBackend.Models;

public class VisitorAnalytics
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = string.Empty;
    
    [BsonElement("sessionId")]
    public string SessionId { get; set; } = string.Empty;
    
    [BsonElement("page")]
    public string Page { get; set; } = string.Empty;
    
    [BsonElement("action")]
    public string Action { get; set; } = string.Empty;
    
    [BsonElement("metadata")]
    public Dictionary<string, object>? Metadata { get; set; }
    
    [BsonElement("ipAddress")]
    public string? IpAddress { get; set; }
    
    [BsonElement("userAgent")]
    public string? UserAgent { get; set; }
    
    [BsonElement("referrer")]
    public string? Referrer { get; set; }
    
    [BsonElement("timestamp")]
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;
    
    [BsonElement("duration")]
    public int? Duration { get; set; } // in seconds
    
    [BsonElement("country")]
    public string? Country { get; set; }
    
    [BsonElement("city")]
    public string? City { get; set; }
    
    [BsonElement("deviceType")]
    public string? DeviceType { get; set; }
    
    [BsonElement("browser")]
    public string? Browser { get; set; }
    
    [BsonElement("os")]
    public string? OperatingSystem { get; set; }
} 