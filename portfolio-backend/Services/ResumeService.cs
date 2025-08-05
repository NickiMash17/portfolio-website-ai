using iTextSharp.text;
using iTextSharp.text.pdf;
using Microsoft.Extensions.Logging;

namespace PortfolioBackend.Services;

public interface IResumeService
{
    Task<byte[]> GenerateResumeAsync(ResumeOptions options);
}

public class ResumeService : IResumeService
{
    private readonly ILogger<ResumeService> _logger;

    public ResumeService(ILogger<ResumeService> logger)
    {
        _logger = logger;
    }

    public async Task<byte[]> GenerateResumeAsync(ResumeOptions options)
    {
        try
        {
            using var memoryStream = new MemoryStream();
            var document = new Document(PageSize.A4, 50, 50, 50, 50);
            var writer = PdfWriter.GetInstance(document, memoryStream);

            document.Open();

            // Add header
            AddHeader(document);

            // Add personal information
            AddPersonalInfo(document);

            // Add sections based on options
            if (options.IncludeSkills)
            {
                AddSkillsSection(document);
            }

            if (options.IncludeCertifications)
            {
                AddCertificationsSection(document);
            }

            if (options.IncludeProjects)
            {
                AddProjectsSection(document);
            }

            // Add experience section
            AddExperienceSection(document);

            // Add education section
            AddEducationSection(document);

            document.Close();

            return memoryStream.ToArray();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating resume");
            throw;
        }
    }

    private void AddHeader(Document document)
    {
        var titleFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 24);
        var subtitleFont = FontFactory.GetFont(FontFactory.HELVETICA, 14);

        var title = new Paragraph("Nicolette Mashaba", titleFont);
        title.Alignment = Element.ALIGN_CENTER;
        document.Add(title);

        var subtitle = new Paragraph("Full-Stack Software Engineer | AI Enthusiast | Azure Certified", subtitleFont);
        subtitle.Alignment = Element.ALIGN_CENTER;
        subtitle.SpacingAfter = 20f;
        document.Add(subtitle);
    }

    private void AddPersonalInfo(Document document)
    {
        var font = FontFactory.GetFont(FontFactory.HELVETICA, 10);
        
        var personalInfo = new Paragraph();
        personalInfo.Add(new Chunk("Email: nene171408@gmail.com", font));
        personalInfo.Add(new Chunk(" | ", font));
        personalInfo.Add(new Chunk("LinkedIn: linkedin.com/in/nicolette-mashaba", font));
        personalInfo.Add(new Chunk(" | ", font));
        personalInfo.Add(new Chunk("GitHub: github.com/NickiMash17", font));
        personalInfo.Alignment = Element.ALIGN_CENTER;
        personalInfo.SpacingAfter = 15f;
        document.Add(personalInfo);
    }

    private void AddSkillsSection(Document document)
    {
        var sectionFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 14);
        var contentFont = FontFactory.GetFont(FontFactory.HELVETICA, 10);

        var sectionTitle = new Paragraph("Technical Skills", sectionFont);
        sectionTitle.SpacingAfter = 10f;
        document.Add(sectionTitle);

        var skills = new Paragraph();
        skills.Add(new Chunk("Backend: ", contentFont));
        skills.Add(new Chunk("C#, ASP.NET Core, Entity Framework Core, SQL Server, MongoDB", contentFont));
        skills.Add(new Chunk("\nFrontend: ", contentFont));
        skills.Add(new Chunk("React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS", contentFont));
        skills.Add(new Chunk("\nCloud & DevOps: ", contentFont));
        skills.Add(new Chunk("Microsoft Azure, Azure DevOps, Docker, Git", contentFont));
        skills.Add(new Chunk("\nAI & ML: ", contentFont));
        skills.Add(new Chunk("Azure Cognitive Services, TensorFlow.js, Machine Learning", contentFont));
        skills.SpacingAfter = 15f;
        document.Add(skills);
    }

    private void AddCertificationsSection(Document document)
    {
        var sectionFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 14);
        var contentFont = FontFactory.GetFont(FontFactory.HELVETICA, 10);

        var sectionTitle = new Paragraph("Certifications", sectionFont);
        sectionTitle.SpacingAfter = 10f;
        document.Add(sectionTitle);

        var certifications = new Paragraph();
        certifications.Add(new Chunk("• Microsoft Azure Data Fundamentals (DP-900) - Certified", contentFont));
        certifications.Add(new Chunk("\n• Microsoft Azure Developer Associate (AZ-204) - Certified", contentFont));
        certifications.Add(new Chunk("\n• Microsoft Azure DevOps Engineer Expert (AZ-400) - In Progress", contentFont));
        certifications.Add(new Chunk("\n• Microsoft Azure Database Administrator Associate (DP-300) - In Progress", contentFont));
        certifications.SpacingAfter = 15f;
        document.Add(certifications);
    }

    private void AddProjectsSection(Document document)
    {
        var sectionFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 14);
        var contentFont = FontFactory.GetFont(FontFactory.HELVETICA, 10);

        var sectionTitle = new Paragraph("Key Projects", sectionFont);
        sectionTitle.SpacingAfter = 10f;
        document.Add(sectionTitle);

        var projects = new Paragraph();
        
        // Project 1
        projects.Add(new Chunk("AI-Powered E-Commerce Platform", contentFont));
        projects.Add(new Chunk("\n• Full-stack solution with AI-driven recommendations and real-time inventory management", contentFont));
        projects.Add(new Chunk("\n• Technologies: C#, ASP.NET Core, React, TypeScript, Azure AI, SQL Server, MongoDB", contentFont));
        projects.Add(new Chunk("\n\n"));

        // Project 2
        projects.Add(new Chunk("Cloud-Native Microservices Architecture", contentFont));
        projects.Add(new Chunk("\n• Scalable microservices with comprehensive DevOps automation and monitoring", contentFont));
        projects.Add(new Chunk("\n• Technologies: C#, .NET Core, Docker, Azure Kubernetes, Azure DevOps, Redis", contentFont));
        projects.Add(new Chunk("\n\n"));

        // Project 3
        projects.Add(new Chunk("Real-Time Collaboration Hub", contentFont));
        projects.Add(new Chunk("\n• Modern collaboration platform with real-time document editing and AI-powered summaries", contentFont));
        projects.Add(new Chunk("\n• Technologies: React, TypeScript, SignalR, Azure SignalR, Vite, Tailwind CSS", contentFont));

        projects.SpacingAfter = 15f;
        document.Add(projects);
    }

    private void AddExperienceSection(Document document)
    {
        var sectionFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 14);
        var contentFont = FontFactory.GetFont(FontFactory.HELVETICA, 10);

        var sectionTitle = new Paragraph("Experience", sectionFont);
        sectionTitle.SpacingAfter = 10f;
        document.Add(sectionTitle);

        var experience = new Paragraph();
        experience.Add(new Chunk("Software Engineering Student", contentFont));
        experience.Add(new Chunk("\n• Currently pursuing Bachelor of Science in Software Engineering", contentFont));
        experience.Add(new Chunk("\n• Specialized in Full-Stack Development and Cloud Computing", contentFont));
        experience.Add(new Chunk("\n• Active member of Computer Science Society", contentFont));
        experience.Add(new Chunk("\n• Participated in hackathons and coding competitions", contentFont));
        experience.SpacingAfter = 15f;
        document.Add(experience);
    }

    private void AddEducationSection(Document document)
    {
        var sectionFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 14);
        var contentFont = FontFactory.GetFont(FontFactory.HELVETICA, 10);

        var sectionTitle = new Paragraph("Education", sectionFont);
        sectionTitle.SpacingAfter = 10f;
        document.Add(sectionTitle);

        var education = new Paragraph();
        education.Add(new Chunk("Bachelor of Science in Software Engineering", contentFont));
        education.Add(new Chunk("\n• Expected Graduation: 2025", contentFont));
        education.Add(new Chunk("\n• Coursework: AI/ML, Web Development, Database Systems, Cloud Computing", contentFont));
        education.Add(new Chunk("\n• GPA: 3.8/4.0", contentFont));
        education.SpacingAfter = 15f;
        document.Add(education);
    }
}

public class ResumeOptions
{
    public string Type { get; set; } = "Technical"; // Technical, General, Academic
    public bool IncludeProjects { get; set; } = true;
    public bool IncludeCertifications { get; set; } = true;
    public bool IncludeSkills { get; set; } = true;
    public string Format { get; set; } = "PDF"; // PDF, DOCX
} 