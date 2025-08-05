# Azure Deployment Guide

This guide will walk you through deploying the AI-powered portfolio website to Azure using Azure App Service for the backend and Azure Static Web Apps for the frontend.

## 🚀 Prerequisites

- Azure account with active subscription
- Azure CLI installed
- .NET 8 SDK
- Node.js 18+
- Git repository with the project code

## 📋 Step 1: Azure Resources Setup

### 1.1 Create Resource Group
```bash
# Create resource group
az group create --name portfolio-rg --location eastus

# Verify resource group
az group show --name portfolio-rg
```

### 1.2 Create Azure SQL Database
```bash
# Create SQL Server
az sql server create \
  --name portfolio-sql-server \
  --resource-group portfolio-rg \
  --location eastus \
  --admin-user sqladmin \
  --admin-password YourSecurePassword123!

# Create SQL Database
az sql db create \
  --resource-group portfolio-rg \
  --server portfolio-sql-server \
  --name PortfolioDB \
  --service-objective Basic

# Get connection string
az sql db show-connection-string \
  --server portfolio-sql-server \
  --name PortfolioDB \
  --client ado.net
```

### 1.3 Create Azure Cosmos DB (MongoDB API)
```bash
# Create Cosmos DB account
az cosmosdb create \
  --name portfolio-cosmos \
  --resource-group portfolio-rg \
  --kind MongoDB \
  --capabilities EnableMongo

# Create database
az cosmosdb mongodb database create \
  --account-name portfolio-cosmos \
  --resource-group portfolio-rg \
  --name PortfolioAnalytics

# Create collections
az cosmosdb mongodb collection create \
  --account-name portfolio-cosmos \
  --resource-group portfolio-rg \
  --database-name PortfolioAnalytics \
  --name contacts

az cosmosdb mongodb collection create \
  --account-name portfolio-cosmos \
  --resource-group portfolio-rg \
  --database-name PortfolioAnalytics \
  --name visitorAnalytics
```

### 1.4 Create Azure Storage Account
```bash
# Create storage account
az storage account create \
  --name portfoliostorage \
  --resource-group portfolio-rg \
  --location eastus \
  --sku Standard_LRS \
  --kind StorageV2

# Create blob container
az storage container create \
  --name images \
  --account-name portfoliostorage

# Get connection string
az storage account show-connection-string \
  --name portfoliostorage \
  --resource-group portfolio-rg
```

### 1.5 Create Azure Cognitive Services
```bash
# Create Cognitive Services account
az cognitiveservices account create \
  --name portfolio-cognitive \
  --resource-group portfolio-rg \
  --kind TextAnalytics \
  --sku S0 \
  --location eastus

# Get keys
az cognitiveservices account keys list \
  --name portfolio-cognitive \
  --resource-group portfolio-rg
```

### 1.6 Create App Service Plan
```bash
# Create App Service Plan
az appservice plan create \
  --name portfolio-plan \
  --resource-group portfolio-rg \
  --sku B1 \
  --is-linux
```

## 📋 Step 2: Backend Deployment

### 2.1 Create Web App for Backend
```bash
# Create web app
az webapp create \
  --name portfolio-backend \
  --resource-group portfolio-rg \
  --plan portfolio-plan \
  --runtime "DOTNETCORE:8.0"

# Configure app settings
az webapp config appsettings set \
  --name portfolio-backend \
  --resource-group portfolio-rg \
  --settings \
    "ConnectionStrings__DefaultConnection"="your_sql_connection_string" \
    "MongoDB__ConnectionString"="your_cosmos_connection_string" \
    "MongoDB__DatabaseName"="PortfolioAnalytics" \
    "Azure__StorageConnectionString"="your_storage_connection_string" \
    "Azure__CognitiveServicesKey"="your_cognitive_services_key" \
    "Azure__CognitiveServicesEndpoint"="https://portfolio-cognitive.cognitiveservices.azure.com/" \
    "ASPNETCORE_ENVIRONMENT"="Production"
```

### 2.2 Deploy Backend Code
```bash
# Navigate to backend directory
cd portfolio-backend

# Build the application
dotnet publish -c Release -o ./publish

# Deploy to Azure
az webapp deployment source config-zip \
  --resource-group portfolio-rg \
  --name portfolio-backend \
  --src ./publish.zip
```

## 📋 Step 3: Frontend Deployment

### 3.1 Create Static Web App
```bash
# Create Static Web App
az staticwebapp create \
  --name portfolio-frontend \
  --resource-group portfolio-rg \
  --source https://github.com/yourusername/portfolio-website-ai \
  --location eastus \
  --branch main \
  --app-location portfolio-frontend \
  --api-location portfolio-backend \
  --output-location dist
```

### 3.2 Configure Environment Variables
```bash
# Set environment variables for frontend
az staticwebapp appsettings set \
  --name portfolio-frontend \
  --resource-group portfolio-rg \
  --setting-names \
    VITE_API_BASE_URL="https://portfolio-backend.azurewebsites.net/api" \
    VITE_AZURE_STORAGE_CONNECTION_STRING="your_storage_connection_string" \
    VITE_MONGO_URI="your_cosmos_connection_string" \
    VITE_AZURE_COGNITIVE_SERVICES_KEY="your_cognitive_services_key"
```

## 📋 Step 4: Azure DevOps Pipeline Setup

### 4.1 Create Azure DevOps Project
1. Go to [Azure DevOps](https://dev.azure.com)
2. Create a new project
3. Connect your GitHub repository

### 4.2 Configure Pipeline
1. Import the `azure-pipelines.yml` file
2. Update the following variables:
   - `AZURE_SUBSCRIPTION`: Your Azure subscription ID
   - `AZURE_STATIC_WEB_APPS_API_TOKEN`: Get from Static Web App settings
   - App names in the pipeline file

### 4.3 Set Up Service Connections
```bash
# Create service connection for Azure
az devops service-endpoint azurerm create \
  --organization https://dev.azure.com/yourorg \
  --project yourproject \
  --name "Azure-Service-Connection" \
  --azure-rm-service-connection-id "your-subscription-id"
```

## 📋 Step 5: Database Setup

### 5.1 SQL Server Database
```sql
-- Connect to your Azure SQL Database
-- Tables will be created automatically by Entity Framework
-- You can also run migrations manually:

-- Create database (if not exists)
CREATE DATABASE PortfolioDB;
GO

-- Use database
USE PortfolioDB;
GO

-- Verify tables exist
SELECT * FROM INFORMATION_SCHEMA.TABLES;
```

### 5.2 MongoDB Collections
```javascript
// Connect to your Cosmos DB MongoDB API
// Collections will be created automatically
// You can verify with:

use PortfolioAnalytics
db.getCollectionNames()
```

## 📋 Step 6: Testing Deployment

### 6.1 Test Backend API
```bash
# Test health endpoint
curl https://portfolio-backend.azurewebsites.net/health

# Test projects endpoint
curl https://portfolio-backend.azurewebsites.net/api/projects

# Test Swagger documentation
open https://portfolio-backend.azurewebsites.net/swagger
```

### 6.2 Test Frontend
```bash
# Open the frontend URL
open https://portfolio-frontend.azurestaticapps.net
```

## 📋 Step 7: Monitoring and Logging

### 7.1 Application Insights
```bash
# Create Application Insights
az monitor app-insights component create \
  --app portfolio-insights \
  --location eastus \
  --resource-group portfolio-rg \
  --application-type web

# Get instrumentation key
az monitor app-insights component show \
  --app portfolio-insights \
  --resource-group portfolio-rg \
  --query instrumentationKey
```

### 7.2 Configure Logging
```bash
# Add Application Insights to backend
az webapp config appsettings set \
  --name portfolio-backend \
  --resource-group portfolio-rg \
  --settings \
    "APPINSIGHTS_INSTRUMENTATIONKEY"="your_instrumentation_key"
```

## 📋 Step 8: Security Configuration

### 8.1 Configure CORS
```bash
# Update CORS settings for backend
az webapp config appsettings set \
  --name portfolio-backend \
  --resource-group portfolio-rg \
  --settings \
    "CORS__AllowedOrigins"="https://portfolio-frontend.azurestaticapps.net"
```

### 8.2 SSL/TLS Configuration
```bash
# Enable HTTPS redirect
az webapp update \
  --name portfolio-backend \
  --resource-group portfolio-rg \
  --https-only true
```

## 📋 Step 9: Performance Optimization

### 9.1 Enable CDN
```bash
# Create CDN profile
az cdn profile create \
  --name portfolio-cdn \
  --resource-group portfolio-rg \
  --sku Standard_Microsoft

# Add CDN endpoint
az cdn endpoint create \
  --name portfolio-cdn-endpoint \
  --profile-name portfolio-cdn \
  --resource-group portfolio-rg \
  --origin portfolio-frontend.azurestaticapps.net \
  --origin-host-header portfolio-frontend.azurestaticapps.net
```

### 9.2 Configure Caching
```bash
# Set cache headers for static assets
az webapp config appsettings set \
  --name portfolio-backend \
  --resource-group portfolio-rg \
  --settings \
    "Cache-Control"="public, max-age=31536000"
```

## 📋 Step 10: Backup and Recovery

### 10.1 Database Backup
```bash
# Configure automated backups for SQL Database
az sql db update \
  --resource-group portfolio-rg \
  --server portfolio-sql-server \
  --name PortfolioDB \
  --backup-storage-redundancy Geo
```

### 10.2 Storage Account Backup
```bash
# Enable soft delete for blob storage
az storage account blob-service-properties update \
  --account-name portfoliostorage \
  --resource-group portfolio-rg \
  --enable-delete-retention true \
  --delete-retention-days 30
```

## 🔧 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Verify CORS settings in backend
   - Check frontend URL in allowed origins

2. **Database Connection Issues**
   - Verify connection strings
   - Check firewall rules for SQL Database

3. **Cognitive Services Errors**
   - Verify API key and endpoint
   - Check quota limits

4. **Static Web App Build Failures**
   - Check build configuration
   - Verify Node.js version

### Useful Commands

```bash
# Check web app logs
az webapp log tail --name portfolio-backend --resource-group portfolio-rg

# Restart web app
az webapp restart --name portfolio-backend --resource-group portfolio-rg

# Check app settings
az webapp config appsettings list --name portfolio-backend --resource-group portfolio-rg

# Scale web app
az webapp update --name portfolio-backend --resource-group portfolio-rg --min-workers 1 --max-workers 3
```

## 📊 Cost Optimization

### Estimated Monthly Costs (US East)
- **Azure App Service (B1)**: ~$13/month
- **Azure SQL Database (Basic)**: ~$5/month
- **Azure Cosmos DB (MongoDB)**: ~$25/month
- **Azure Storage**: ~$1/month
- **Azure Cognitive Services**: ~$3/month
- **Azure Static Web Apps**: Free tier
- **Total**: ~$47/month

### Cost Optimization Tips
1. Use Basic tier for SQL Database initially
2. Monitor Cosmos DB usage and adjust capacity
3. Use free tier for Static Web Apps
4. Set up budget alerts in Azure

## 🚀 Next Steps

1. **Set up custom domain** for professional appearance
2. **Configure SSL certificates** for HTTPS
3. **Set up monitoring alerts** for performance
4. **Implement CI/CD pipeline** for automated deployments
5. **Add backup strategies** for data protection

## 📞 Support

For deployment issues:
- Check Azure documentation
- Review application logs
- Contact Azure support if needed
- Use Azure Advisor for optimization recommendations

---

**Happy Deploying! 🚀** 