using System.Text.Json;

namespace PortfolioBackend.Services;

public interface IChatbotService
{
    Task<ChatbotResponse> ProcessMessageAsync(string message);
}

public class ChatbotService : IChatbotService
{
    private readonly ILogger<ChatbotService> _logger;
    private readonly Dictionary<string, string[]> _responses;

    public ChatbotService(ILogger<ChatbotService> logger)
    {
        _logger = logger;
        _responses = InitializeResponses();
    }

    public async Task<ChatbotResponse> ProcessMessageAsync(string message)
    {
        try
        {
            var lowerMessage = message.ToLower();
            var response = await GenerateResponseAsync(lowerMessage);
            
            return new ChatbotResponse
            {
                Message = response,
                Timestamp = DateTime.UtcNow,
                Intent = DetermineIntent(lowerMessage)
            };
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error processing chatbot message: {Message}", message);
            return new ChatbotResponse
            {
                Message = "I apologize, but I'm having trouble processing your request. Please try again or contact me directly.",
                Timestamp = DateTime.UtcNow,
                Intent = "error"
            };
        }
    }

    private async Task<string> GenerateResponseAsync(string message)
    {
        // Simulate async processing
        await Task.Delay(100);

        // Check for specific keywords and return appropriate responses
        if (message.Contains("azure") || message.Contains("cloud"))
        {
            return "I'm Microsoft Azure certified! I have experience with Azure App Services, Azure Functions, Azure SQL Database, and Azure DevOps. I'm currently pursuing Azure DevOps Engineer and Azure Database Administrator certifications.";
        }

        if (message.Contains("c#") || message.Contains("dotnet") || message.Contains(".net"))
        {
            return "C# and .NET are my primary backend technologies. I specialize in ASP.NET Core, Entity Framework Core, and building RESTful APIs. I also work with microservices architecture and cloud-native applications.";
        }

        if (message.Contains("react") || message.Contains("frontend") || message.Contains("typescript"))
        {
            return "I'm proficient in React with TypeScript, using modern tools like Vite and Tailwind CSS. I create responsive, interactive user interfaces with animations and real-time features.";
        }

        if (message.Contains("ai") || message.Contains("machine learning") || message.Contains("ml"))
        {
            return "I'm passionate about AI and machine learning! I work with Azure Cognitive Services, TensorFlow.js for client-side AI, and integrate ML features into web applications. I'm always exploring new AI technologies.";
        }

        if (message.Contains("project") || message.Contains("portfolio"))
        {
            return "I've built several projects including AI-powered e-commerce platforms, cloud-native microservices, real-time collaboration tools, and data analytics dashboards. Each project showcases different aspects of full-stack development and AI integration.";
        }

        if (message.Contains("experience") || message.Contains("background"))
        {
            return "I'm a software engineering student with 2+ years of learning experience. I'm Microsoft Azure certified and actively pursuing additional certifications. I focus on full-stack development with a passion for AI integration.";
        }

        if (message.Contains("contact") || message.Contains("email") || message.Contains("reach"))
        {
            return "You can reach me at nene171408@gmail.com. I'm always open to discussing learning opportunities, internships, interesting projects, or just having a chat about technology!";
        }

        if (message.Contains("resume") || message.Contains("cv"))
        {
            return "I can generate different versions of my resume - technical, general, or academic. Just let me know which format you prefer, and I'll create a customized PDF for you.";
        }

        if (message.Contains("github") || message.Contains("code"))
        {
            return "You can find my projects on GitHub at https://github.com/NickiMash17. I'm active in open source and always working on new projects that combine my interests in full-stack development and AI.";
        }

        if (message.Contains("certification") || message.Contains("certified"))
        {
            return "I'm Microsoft Azure certified! I have Azure Data Fundamentals (DP-900) and Azure Developer Associate (AZ-204) certifications. I'm currently working on Azure DevOps Engineer (AZ-400) and Azure Database Administrator (DP-300) certifications.";
        }

        // Default response
        return "Hi! I'm your AI assistant. I can help you learn about my skills, projects, experience, and how we might collaborate. Feel free to ask about my Azure certifications, C#/.NET experience, React development, or AI projects!";
    }

    private string DetermineIntent(string message)
    {
        if (message.Contains("azure") || message.Contains("cloud")) return "azure_expertise";
        if (message.Contains("c#") || message.Contains("dotnet")) return "backend_skills";
        if (message.Contains("react") || message.Contains("frontend")) return "frontend_skills";
        if (message.Contains("ai") || message.Contains("ml")) return "ai_interest";
        if (message.Contains("project")) return "project_inquiry";
        if (message.Contains("experience")) return "background_info";
        if (message.Contains("contact")) return "contact_info";
        if (message.Contains("resume")) return "resume_request";
        if (message.Contains("github")) return "github_link";
        if (message.Contains("certification")) return "certification_info";
        
        return "general_inquiry";
    }

    private Dictionary<string, string[]> InitializeResponses()
    {
        return new Dictionary<string, string[]>
        {
            ["greeting"] = new[]
            {
                "Hello! I'm your AI assistant. How can I help you today?",
                "Hi there! I'm here to help you learn about my skills and projects.",
                "Welcome! I can tell you about my experience with Azure, C#, React, and AI technologies."
            },
            ["azure"] = new[]
            {
                "I'm Microsoft Azure certified with experience in App Services, Functions, and SQL Database.",
                "Azure is my cloud platform of choice. I work with various Azure services for scalable applications.",
                "I have Azure Data Fundamentals and Azure Developer Associate certifications, with more in progress."
            },
            ["backend"] = new[]
            {
                "C# and .NET Core are my primary backend technologies. I build RESTful APIs and microservices.",
                "I specialize in ASP.NET Core, Entity Framework Core, and cloud-native backend development.",
                "My backend experience includes SQL Server, MongoDB, and Azure cloud services."
            },
            ["frontend"] = new[]
            {
                "I work with React, TypeScript, and modern frontend tools like Vite and Tailwind CSS.",
                "I create responsive, interactive user interfaces with smooth animations and real-time features.",
                "My frontend skills include React hooks, state management, and modern CSS techniques."
            },
            ["ai"] = new[]
            {
                "I'm passionate about AI and integrate machine learning into web applications.",
                "I work with Azure Cognitive Services, TensorFlow.js, and client-side AI features.",
                "AI is a key focus area for me, from sentiment analysis to recommendation systems."
            }
        };
    }
}

public class ChatbotResponse
{
    public string Message { get; set; } = string.Empty;
    public DateTime Timestamp { get; set; }
    public string Intent { get; set; } = string.Empty;
} 