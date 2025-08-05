using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using MongoDB.Driver;
using PortfolioBackend.Data;
using PortfolioBackend.Services;
using PortfolioBackend.Configuration;
using PortfolioBackend.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo 
    { 
        Title = "Portfolio API", 
        Version = "v1",
        Description = "AI-powered portfolio backend API"
    });
});

// Database Configuration
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// MongoDB Configuration
builder.Services.Configure<MongoDBSettings>(
    builder.Configuration.GetSection("MongoDB"));

builder.Services.AddSingleton<IMongoDatabase>(provider =>
{
    var settings = builder.Configuration.GetSection("MongoDB").Get<MongoDBSettings>();
    var client = new MongoClient(settings?.ConnectionString ?? "mongodb://localhost:27017");
    return client.GetDatabase(settings?.DatabaseName ?? "PortfolioAnalytics");
});

// Azure Services Configuration
builder.Services.Configure<AzureSettings>(
    builder.Configuration.GetSection("Azure"));

// CORS Configuration
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// Register Services
builder.Services.AddScoped<IAIService, AIService>();
builder.Services.AddScoped<IChatbotService, ChatbotService>();
builder.Services.AddScoped<IResumeService, ResumeService>();

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Portfolio API v1");
    });
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");

// Custom middleware
app.UseMiddleware<ErrorHandlingMiddleware>();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

// Health check endpoint
app.MapGet("/health", () => new { status = "healthy", timestamp = DateTime.UtcNow });

// Ensure database is created
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    context.Database.EnsureCreated();
}

app.Run(); 