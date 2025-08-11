using Azure.AI.TextAnalytics;
using Azure;

namespace PortfolioBackend.Services;

public interface IAzureCognitiveService
{
    Task<(string Sentiment, double Score)> AnalyzeSentimentAsync(string text);
    Task<string> ExtractKeyPhrasesAsync(string text);
}

public class AzureCognitiveService : IAzureCognitiveService
{
    private readonly TextAnalyticsClient _client;
    private readonly ILogger<AzureCognitiveService> _logger;
    
    public AzureCognitiveService(IConfiguration configuration, ILogger<AzureCognitiveService> logger)
    {
        var endpoint = configuration["Azure:CognitiveServices:Endpoint"];
        var key = configuration["Azure:CognitiveServices:Key"];
        
        if (string.IsNullOrEmpty(endpoint) || string.IsNullOrEmpty(key))
        {
            throw new InvalidOperationException("Azure Cognitive Services configuration is missing");
        }
        
        _client = new TextAnalyticsClient(new Uri(endpoint), new AzureKeyCredential(key));
        _logger = logger;
    }
    
    public async Task<(string Sentiment, double Score)> AnalyzeSentimentAsync(string text)
    {
        try
        {
            var response = await _client.AnalyzeSentimentAsync(text);
            var documentSentiment = response.Value;
            
            var score = documentSentiment.Sentiment switch
            {
                TextSentiment.Positive => documentSentiment.ConfidenceScores.Positive,
                TextSentiment.Negative => documentSentiment.ConfidenceScores.Negative,
                _ => documentSentiment.ConfidenceScores.Neutral
            };
            
            return (documentSentiment.Sentiment.ToString(), score);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error analyzing sentiment: {Error}", ex.Message);
            return ("neutral", 0.5);
        }
    }
    
    public async Task<string> ExtractKeyPhrasesAsync(string text)
    {
        try
        {
            var response = await _client.ExtractKeyPhrasesAsync(text);
            var keyPhrases = response.Value;
            
            return string.Join(", ", keyPhrases);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error extracting key phrases from text: {Text}", text);
            return string.Empty;
        }
    }
} 