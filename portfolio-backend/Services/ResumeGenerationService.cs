using Microsoft.EntityFrameworkCore;
using PortfolioBackend.Data;
using PortfolioBackend.Models;
using iTextSharp.text;
using iTextSharp.text.pdf;
using System.Text.Json;

namespace PortfolioBackend.Services;

public interface IResumeGenerationService
{
    Task<byte[]> GenerateResumeAsync(string templateType, Dictionary<string, object> data);
    Task<List<ResumeTemplate>> GetAvailableTemplatesAsync();
}

public class ResumeGenerationService : IResumeGenerationService
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<ResumeGenerationService> _logger;
    
    public ResumeGenerationService(ApplicationDbContext context, ILogger<ResumeGenerationService> logger)
    {
        _context = context;
        _logger = logger;
    }
    
    public async Task<List<ResumeTemplate>> GetAvailableTemplatesAsync()
    {
        return await _context.ResumeTemplates
            .Where(t => t.IsActive)
            .OrderBy(t => t.Type)
            .ToListAsync();
    }
    
    public async Task<byte[]> GenerateResumeAsync(string templateType, Dictionary<string, object> data)
    {
        var template = await _context.ResumeTemplates
            .FirstOrDefaultAsync(t => t.Type == templateType && t.IsActive);
        
        if (template == null)
        {
            throw new ArgumentException($"Template '{templateType}' not found or inactive");
        }
        
        using var memoryStream = new MemoryStream();
        var document = new Document(PageSize.A4, 50, 50, 50, 50);
        var writer = PdfWriter.GetInstance(document, memoryStream);
        
        document.Open();
        
        try
        {
            // Add header
            var headerFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 18);
            var title = new Paragraph("Nicolette Mashaba", headerFont);
            title.Alignment = Element.ALIGN_CENTER;
            document.Add(title);
            
            // Add subtitle
            var subtitleFont = FontFactory.GetFont(FontFactory.HELVETICA, 12);
            var subtitle = new Paragraph("Software Developer & AI Enthusiast", subtitleFont);
            subtitle.Alignment = Element.ALIGN_CENTER;
            subtitle.SpacingAfter = 20f;
            document.Add(subtitle);
            
            // Add contact information
            var contactFont = FontFactory.GetFont(FontFactory.HELVETICA, 10);
            var contactInfo = new Paragraph();
            contactInfo.Add(new Chunk("Email: nicolette.mashaba@example.com\n"));
            contactInfo.Add(new Chunk("LinkedIn: linkedin.com/in/nicolette-mashaba\n"));
            contactInfo.Add(new Chunk("GitHub: github.com/nicolette-mashaba"));
            contactInfo.Alignment = Element.ALIGN_CENTER;
            contactInfo.SpacingAfter = 20f;
            document.Add(contactInfo);
            
            // Add template content
            var contentFont = FontFactory.GetFont(FontFactory.HELVETICA, 11);
            var content = new Paragraph(template.Content, contentFont);
            content.SpacingAfter = 15f;
            document.Add(content);
            
            // Add dynamic sections based on template type
            switch (templateType.ToLower())
            {
                case "technical":
                    AddTechnicalSection(document, data);
                    break;
                case "general":
                    AddGeneralSection(document, data);
                    break;
                default:
                    AddDefaultSection(document, data);
                    break;
            }
            
            document.Close();
            return memoryStream.ToArray();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating resume for template: {TemplateType}", templateType);
            document.Close();
            throw;
        }
    }
    
    private void AddTechnicalSection(Document document, Dictionary<string, object> data)
    {
        var sectionFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 14);
        var contentFont = FontFactory.GetFont(FontFactory.HELVETICA, 11);
        
        // Technical Skills
        var skillsTitle = new Paragraph("Technical Skills", sectionFont);
        skillsTitle.SpacingAfter = 10f;
        document.Add(skillsTitle);
        
        var skills = new Paragraph("• C#, ASP.NET Core, Entity Framework\n• React, TypeScript, Node.js\n• Azure Cloud Services\n• MongoDB, SQL Server\n• Docker, CI/CD Pipelines", contentFont);
        skills.SpacingAfter = 15f;
        document.Add(skills);
        
        // Projects
        var projectsTitle = new Paragraph("Key Projects", sectionFont);
        projectsTitle.SpacingAfter = 10f;
        document.Add(projectsTitle);
        
        var projects = new Paragraph("• AI-Powered Portfolio Website - Full-stack application with Azure integration\n• E-commerce Platform - React frontend with .NET backend\n• Data Analytics Dashboard - Real-time analytics with MongoDB", contentFont);
        document.Add(projects);
    }
    
    private void AddGeneralSection(Document document, Dictionary<string, object> data)
    {
        var sectionFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 14);
        var contentFont = FontFactory.GetFont(FontFactory.HELVETICA, 11);
        
        // Experience
        var experienceTitle = new Paragraph("Professional Experience", sectionFont);
        experienceTitle.SpacingAfter = 10f;
        document.Add(experienceTitle);
        
        var experience = new Paragraph("• Software Developer at TechCorp (2022-Present)\n• Junior Developer at StartupXYZ (2021-2022)\n• Intern at InnovationLab (2020-2021)", contentFont);
        experience.SpacingAfter = 15f;
        document.Add(experience);
        
        // Education
        var educationTitle = new Paragraph("Education", sectionFont);
        educationTitle.SpacingAfter = 10f;
        document.Add(educationTitle);
        
        var education = new Paragraph("• Bachelor of Science in Computer Science\n• University of Technology (2018-2022)", contentFont);
        document.Add(education);
    }
    
    private void AddDefaultSection(Document document, Dictionary<string, object> data)
    {
        var sectionFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 14);
        var contentFont = FontFactory.GetFont(FontFactory.HELVETICA, 11);
        
        var defaultContent = new Paragraph("Professional portfolio showcasing full-stack development skills with focus on modern web technologies and cloud services.", contentFont);
        document.Add(defaultContent);
    }
} 