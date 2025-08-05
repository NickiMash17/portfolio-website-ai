namespace PortfolioBackend.Configuration;

public class AzureSettings
{
    public string StorageConnectionString { get; set; } = string.Empty;
    public string CognitiveServicesKey { get; set; } = string.Empty;
    public string CognitiveServicesEndpoint { get; set; } = string.Empty;
    public string BotServiceKey { get; set; } = string.Empty;
    public string BotServiceEndpoint { get; set; } = string.Empty;
    public string Authority { get; set; } = string.Empty;
    public string Audience { get; set; } = string.Empty;
} 