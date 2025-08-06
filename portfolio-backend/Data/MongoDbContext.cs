using MongoDB.Driver;
using PortfolioBackend.Models.Mongo;

namespace PortfolioBackend.Data;

public class MongoDbContext
{
    private readonly IMongoDatabase _database;
    
    public MongoDbContext(IMongoDatabase database)
    {
        _database = database;
    }
    
    public IMongoCollection<ContactMessage> ContactMessages => 
        _database.GetCollection<ContactMessage>("ContactMessages");
    
    public IMongoCollection<VisitorInteraction> VisitorInteractions => 
        _database.GetCollection<VisitorInteraction>("VisitorInteractions");
    
    // Create indexes for better query performance
    public async Task CreateIndexesAsync()
    {
        // Contact messages indexes
        var contactIndexKeys = Builders<ContactMessage>.IndexKeys
            .Ascending(x => x.Timestamp)
            .Ascending(x => x.Sentiment);
        
        var contactIndexOptions = new CreateIndexOptions { Name = "timestamp_sentiment" };
        await ContactMessages.Indexes.CreateOneAsync(contactIndexKeys, contactIndexOptions);
        
        // Visitor interactions indexes
        var visitorIndexKeys = Builders<VisitorInteraction>.IndexKeys
            .Ascending(x => x.Timestamp)
            .Ascending(x => x.Page)
            .Ascending(x => x.Action);
        
        var visitorIndexOptions = new CreateIndexOptions { Name = "timestamp_page_action" };
        await VisitorInteractions.Indexes.CreateOneAsync(visitorIndexKeys, visitorIndexOptions);
        
        // Session index for analytics
        var sessionIndexKeys = Builders<VisitorInteraction>.IndexKeys
            .Ascending(x => x.SessionId);
        
        var sessionIndexOptions = new CreateIndexOptions { Name = "sessionId" };
        await VisitorInteractions.Indexes.CreateOneAsync(sessionIndexKeys, sessionIndexOptions);
    }
} 