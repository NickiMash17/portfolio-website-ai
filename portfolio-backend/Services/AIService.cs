using Azure.AI.TextAnalytics;
using Microsoft.Extensions.Options;
using PortfolioBackend.Configuration;
using System.Text.Json;

namespace PortfolioBackend.Services;

public interface IAIService
{
    Task<SentimentAnalysisResult> AnalyzeSentimentAsync(string text);
    Task<List<string>> ExtractKeyPhrasesAsync(string text);
    Task<string> DetectLanguageAsync(string text);
    Task<Dictionary<string, double>> GetProjectRecommendationsAsync(List<string> userInteractions);
}

public class AIService : IAIService
{
    private readonly TextAnalyticsClient _textAnalyticsClient;
    private readonly ILogger<AIService> _logger;

    public AIService(IOptions<AzureSettings> azureSettings, ILogger<AIService> logger)
    {
        var settings = azureSettings.Value;
        var credentials = new Azure.AzureKeyCredential(settings.CognitiveServicesKey);
        _textAnalyticsClient = new TextAnalyticsClient(new Uri(settings.CognitiveServicesEndpoint), credentials);
        _logger = logger;
    }

    public async Task<SentimentAnalysisResult> AnalyzeSentimentAsync(string text)
    {
        try
        {
            var response = await _textAnalyticsClient.AnalyzeSentimentAsync(text);
            var documentSentiment = response.Value;

            return new SentimentAnalysisResult
            {
                Sentiment = documentSentiment.Sentiment.ToString(),
                ConfidenceScore = (float)documentSentiment.ConfidenceScores.Positive,
                PositiveScore = (float)documentSentiment.ConfidenceScores.Positive,
                NeutralScore = (float)documentSentiment.ConfidenceScores.Neutral,
                NegativeScore = (float)documentSentiment.ConfidenceScores.Negative
            };
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error analyzing sentiment for text: {Text}", text);
            return new SentimentAnalysisResult
            {
                Sentiment = "neutral",
                ConfidenceScore = 0.5f,
                PositiveScore = 0.33f,
                NeutralScore = 0.34f,
                NegativeScore = 0.33f
            };
        }
    }

    public async Task<List<string>> ExtractKeyPhrasesAsync(string text)
    {
        try
        {
            var response = await _textAnalyticsClient.ExtractKeyPhrasesAsync(text);
            return response.Value.ToList();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error extracting key phrases from text: {Text}", text);
            return new List<string>();
        }
    }

    public async Task<string> DetectLanguageAsync(string text)
    {
        try
        {
            var response = await _textAnalyticsClient.DetectLanguageAsync(text);
            return response.Value.Name;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error detecting language for text: {Text}", text);
            return "en";
        }
    }

    public async Task<Dictionary<string, double>> GetProjectRecommendationsAsync(List<string> userInteractions)
    {
        try
        {
            // Simple recommendation algorithm based on interaction patterns
            var recommendations = new Dictionary<string, double>();
            
            // Define project categories and their weights
            var projectCategories = new Dictionary<string, List<string>>
            {
                ["AI/ML"] = new List<string> { "ai", "ml", "machine learning", "tensorflow", "azure ai", "cognitive" },
                ["Frontend"] = new List<string> { "react", "typescript", "javascript", "html", "css", "frontend" },
                ["Backend"] = new List<string> { "c#", "dotnet", "asp.net", "api", "backend", "sql" },
                ["Cloud"] = new List<string> { "azure", "cloud", "devops", "kubernetes", "docker" },
                ["Database"] = new List<string> { "sql", "mongodb", "database", "cosmos", "redis" }
            };

            // Calculate scores based on user interactions
            foreach (var category in projectCategories)
            {
                double score = 0;
                foreach (var interaction in userInteractions)
                {
                    var lowerInteraction = interaction.ToLower();
                    foreach (var keyword in category.Value)
                    {
                        if (lowerInteraction.Contains(keyword.ToLower()))
                        {
                            score += 1.0;
                        }
                    }
                }
                
                if (score > 0)
                {
                    recommendations[category.Key] = score;
                }
            }

            // Normalize scores
            if (recommendations.Any())
            {
                var maxScore = recommendations.Values.Max();
                foreach (var key in recommendations.Keys.ToList())
                {
                    recommendations[key] = recommendations[key] / maxScore;
                }
            }

            return recommendations;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating project recommendations");
            return new Dictionary<string, double>();
        }
    }
}

public class SentimentAnalysisResult
{
    public string Sentiment { get; set; } = string.Empty;
    public float ConfidenceScore { get; set; }
    public float PositiveScore { get; set; }
    public float NeutralScore { get; set; }
    public float NegativeScore { get; set; }
} 