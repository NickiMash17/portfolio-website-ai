# Portfolio Backend API

A comprehensive ASP.NET Core backend for an AI-powered portfolio website with Azure integration, sentiment analysis, and real-time analytics.

## 🚀 Features

- **Projects Management**: CRUD operations for portfolio projects with SQL Server
- **Resume Generation**: PDF resume generation using iTextSharp with customizable templates
- **Contact Form**: Contact submission with Azure Cognitive Services sentiment analysis
- **Analytics**: Visitor interaction tracking with MongoDB
- **AI Integration**: Azure Cognitive Services for sentiment analysis
- **Security**: Azure AD authentication for admin endpoints
- **Real-time Analytics**: MongoDB-based visitor tracking and analytics

## 📋 Prerequisites

- .NET 8 SDK
- SQL Server (Local or Azure SQL Database)
- MongoDB (Local or Azure Cosmos DB)
- Azure Cognitive Services account
- Azure Storage account (for project images)

## 🛠️ Setup Instructions

### 1. Clone and Navigate
```bash
git clone <repository-url>
cd portfolio-backend
```

### 2. Install Dependencies
```bash
dotnet restore
```

### 3. Configure Environment

#### Local Development
Create `appsettings.Development.json`:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=PortfolioDB;Trusted_Connection=True;TrustServerCertificate=true;"
  },
  "MongoDB": {
    "ConnectionString": "mongodb://localhost:27017",
    "DatabaseName": "PortfolioAnalytics"
  },
  "Azure": {
    "CognitiveServices": {
      "Endpoint": "https://your-cognitive-services.cognitiveservices.azure.com/",
      "Key": "your-cognitive-services-key"
    }
  }
}
```

#### Production
Set environment variables:
```bash
export ConnectionStrings__DefaultConnection="your-sql-connection-string"
export MongoDB__ConnectionString="your-mongodb-connection-string"
export Azure__CognitiveServices__Endpoint="your-cognitive-services-endpoint"
export Azure__CognitiveServices__Key="your-cognitive-services-key"
```

### 4. Database Setup

#### SQL Server
```bash
# Create database
dotnet ef database update

# Or manually:
CREATE DATABASE PortfolioDB;
```

#### MongoDB
```bash
# Start MongoDB (if local)
mongod

# Collections will be created automatically
```

### 5. Run the Application
```bash
dotnet run
```

The API will be available at `https://localhost:7001` (or `http://localhost:5001`)

## 📚 API Documentation

### Projects API

#### GET /api/projects
Get all active projects
```bash
curl https://localhost:7001/api/projects
```

#### GET /api/projects/{id}
Get a specific project
```bash
curl https://localhost:7001/api/projects/1
```

#### GET /api/projects/tag/{tag}
Get projects by tag
```bash
curl https://localhost:7001/api/projects/tag/React
```

#### POST /api/projects (Admin only)
Create a new project
```bash
curl -X POST https://localhost:7001/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-jwt-token" \
  -d '{
    "title": "New Project",
    "description": "Project description",
    "tags": ["React", "TypeScript"],
    "demoUrl": "https://demo.com",
    "githubUrl": "https://github.com/project"
  }'
```

### Contact API

#### POST /api/contact
Submit a contact form with sentiment analysis
```bash
curl -X POST https://localhost:7001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Great portfolio! I love your work."
  }'
```

Response includes sentiment analysis:
```json
{
  "message": "Contact message submitted successfully",
  "sentiment": "Positive",
  "sentimentScore": 0.85,
  "id": "507f1f77bcf86cd799439011"
}
```

### Resume API

#### GET /api/resume/templates
Get available resume templates
```bash
curl https://localhost:7001/api/resume/templates
```

#### POST /api/resume/generate
Generate a PDF resume
```bash
curl -X POST https://localhost:7001/api/resume/generate \
  -H "Content-Type: application/json" \
  -d '{
    "templateType": "Technical",
    "data": {
      "name": "Nicolette Mashaba",
      "skills": ["C#", "React", "Azure"]
    }
  }'
```

### Analytics API

#### POST /api/analytics
Log a visitor interaction
```bash
curl -X POST https://localhost:7001/api/analytics \
  -H "Content-Type: application/json" \
  -d '{
    "page": "/projects",
    "action": "view",
    "sessionId": "session123",
    "duration": 30
  }'
```

#### GET /api/analytics (Admin only)
Get aggregated analytics
```bash
curl https://localhost:7001/api/analytics \
  -H "Authorization: Bearer your-jwt-token"
```

## 🧪 Testing

### Run Unit Tests
```bash
dotnet test
```

### Run Specific Test
```bash
dotnet test --filter "ProjectsControllerTests"
```

### Test Coverage
```bash
dotnet test --collect:"XPlat Code Coverage"
```

## 🚀 Deployment

### Azure App Service

1. **Create App Service**
```bash
az webapp create \
  --name portfolio-backend \
  --resource-group portfolio-rg \
  --plan portfolio-plan \
  --runtime "DOTNETCORE:8.0"
```

2. **Configure App Settings**
```bash
az webapp config appsettings set \
  --name portfolio-backend \
  --resource-group portfolio-rg \
  --settings \
    "ConnectionStrings__DefaultConnection"="your-sql-connection-string" \
    "MongoDB__ConnectionString"="your-mongodb-connection-string" \
    "Azure__CognitiveServices__Endpoint"="your-cognitive-endpoint" \
    "Azure__CognitiveServices__Key"="your-cognitive-key"
```

3. **Deploy**
```bash
dotnet publish -c Release -o ./publish
az webapp deployment source config-zip \
  --resource-group portfolio-rg \
  --name portfolio-backend \
  --src ./publish.zip
```

### Docker Deployment

1. **Build Image**
```bash
docker build -t portfolio-backend .
```

2. **Run Container**
```bash
docker run -p 8080:80 \
  -e ConnectionStrings__DefaultConnection="your-connection-string" \
  -e MongoDB__ConnectionString="your-mongodb-connection" \
  portfolio-backend
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ConnectionStrings__DefaultConnection` | SQL Server connection string | Yes |
| `MongoDB__ConnectionString` | MongoDB connection string | Yes |
| `MongoDB__DatabaseName` | MongoDB database name | No (default: PortfolioAnalytics) |
| `Azure__CognitiveServices__Endpoint` | Cognitive Services endpoint | Yes |
| `Azure__CognitiveServices__Key` | Cognitive Services API key | Yes |
| `Azure__Storage__ConnectionString` | Azure Storage connection string | No |
| `Azure__Ad__TenantId` | Azure AD tenant ID | No |
| `Azure__Ad__ClientId` | Azure AD client ID | No |

### CORS Configuration

Update `appsettings.json` to allow your frontend domain:
```json
{
  "Cors": {
    "AllowedOrigins": [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://your-frontend-domain.com"
    ]
  }
}
```

## 📊 Monitoring

### Health Check
```bash
curl https://localhost:7001/health
```

### Swagger Documentation
Visit `https://localhost:7001/swagger` for interactive API documentation.

### Logging
Logs are written to console and can be configured for Azure Application Insights.

## 🔒 Security

### Azure AD Authentication
For admin endpoints, configure Azure AD:

1. Register app in Azure AD
2. Set environment variables:
   - `Azure__Ad__TenantId`
   - `Azure__Ad__ClientId`
   - `Azure__Ad__ClientSecret`

### JWT Tokens
Admin endpoints require JWT tokens with "Admin" role.

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Verify connection strings
   - Check firewall rules for Azure SQL
   - Ensure database exists

2. **MongoDB Connection Issues**
   - Verify MongoDB is running
   - Check connection string format
   - Ensure network access

3. **Cognitive Services Errors**
   - Verify API key and endpoint
   - Check quota limits
   - Ensure region matches

4. **CORS Errors**
   - Update allowed origins in configuration
   - Check frontend URL

### Debug Mode
```bash
dotnet run --environment Development
```

## 📈 Performance

### Database Optimization
- SQL Server: Indexes on frequently queried columns
- MongoDB: Compound indexes for analytics queries

### Caching
Consider adding Redis caching for:
- Project listings
- Resume templates
- Analytics aggregations

### Scaling
- Use Azure SQL Database with auto-scaling
- Consider MongoDB Atlas for managed NoSQL
- Implement CDN for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For issues and questions:
- Check the troubleshooting section
- Review Azure documentation
- Open an issue on GitHub

---

**Happy Coding! 🚀** 