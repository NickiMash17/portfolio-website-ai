using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PortfolioBackend.Models.Mongo;

public class VisitorInteraction
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = string.Empty;
    
    [BsonElement("page")]
    [BsonRequired]
    public string Page { get; set; } = string.Empty;
    
    [BsonElement("action")]
    [BsonRequired]
    public string Action { get; set; } = string.Empty;
    
    [BsonElement("timestamp")]
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;
    
    [BsonElement("sessionId")]
    public string? SessionId { get; set; }
    
    [BsonElement("ipAddress")]
    public string? IpAddress { get; set; }
    
    [BsonElement("userAgent")]
    public string? UserAgent { get; set; }
    
    [BsonElement("referrer")]
    public string? Referrer { get; set; }
    
    [BsonElement("duration")]
    public int? Duration { get; set; } // in seconds
    
    [BsonElement("elementId")]
    public string? ElementId { get; set; }
    
    [BsonElement("metadata")]
    public Dictionary<string, object>? Metadata { get; set; }
} 