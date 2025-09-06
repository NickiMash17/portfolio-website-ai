# 🚀 Azure Deployment Guide for Portfolio Website

## Prerequisites

1. **Azure Account** with active subscription
2. **Azure DevOps** organization and project
3. **Git** repository connected to Azure DevOps
4. **Azure CLI** installed locally (optional but recommended)

## 🏗️ Azure Resources to Create

### 1. Azure App Service (Backend API)
```bash
# Create Resource Group
az group create --name portfolio-rg --location eastus

# Create App Service Plan
az appservice plan create --name portfolio-plan --resource-group portfolio-rg --sku B1 --is-linux

# Create Web App
az webapp create --name portfolio-backend-api --resource-group portfolio-rg --plan portfolio-plan --runtime "DOTNETCORE:8.0"
```

### 2. Azure Static Web App (Frontend)
```bash
# Create Static Web App
az staticwebapp create --name portfolio-frontend --resource-group portfolio-rg --source https://github.com/YOUR_ORG/YOUR_REPO --branch main --app-location "/" --api-location "portfolio-backend"
```

### 3. Azure Database Services
```bash
# Create SQL Database (if using SQL Server)
az sql server create --name portfolio-sql --resource-group portfolio-rg --location eastus --admin-user adminuser --admin-password "YourPassword123!"

az sql db create --resource-group portfolio-rg --server portfolio-sql --name PortfolioDB --edition Basic

# Create MongoDB Atlas cluster (recommended) or Azure Cosmos DB
# MongoDB Atlas: https://www.mongodb.com/atlas
```

### 4. Azure Cognitive Services
```bash
# Create Cognitive Services account
az cognitiveservices account create --name portfolio-cognitive --resource-group portfolio-rg --kind TextAnalytics --sku S0 --location eastus
```

## 🔧 Azure DevOps Pipeline Variables

Set these variables in your Azure DevOps pipeline:

### Required Variables
- `AZURE_SUBSCRIPTION`: Your Azure subscription ID
- `AZURE_WEBAPP_NAME`: portfolio-backend-api
- `AZURE_STATIC_WEB_APP_NAME`: portfolio-frontend
- `AZURE_STATIC_WEB_APPS_API_TOKEN`: Get from Static Web App deployment token

### Connection Strings
- `SQL_CONNECTION_STRING`: SQL Server connection string
- `MONGO_CONNECTION_STRING`: MongoDB connection string
- `STORAGE_CONNECTION_STRING`: Azure Storage connection string

### Azure Services
- `COGNITIVE_SERVICES_ENDPOINT`: Cognitive Services endpoint
- `COGNITIVE_SERVICES_KEY`: Cognitive Services key
- `AZURE_AD_TENANT_ID`: Azure AD tenant ID
- `AZURE_AD_CLIENT_ID`: Azure AD client ID
- `AZURE_AD_CLIENT_SECRET`: Azure AD client secret

### Security
- `JWT_SECRET_KEY`: JWT signing key (generate a strong key)
- `JWT_ISSUER`: JWT issuer (your domain)
- `JWT_AUDIENCE`: JWT audience (your app)

## 🚀 Deployment Steps

### Step 1: Set up Azure DevOps Variables
1. Go to your Azure DevOps project
2. Navigate to Pipelines → Library
3. Create a variable group called "Production"
4. Add all the variables listed above

### Step 2: Update Pipeline Variables
1. Edit your `azure-pipelines.yml`
2. Reference the variable group:
```yaml
variables:
  - group: Production
```

### Step 3: Run the Pipeline
1. Commit and push your changes
2. Go to Pipelines → Pipelines
3. Run the pipeline manually or it will trigger on main branch push

## 🔍 Post-Deployment Verification

### Backend API Health Check
```bash
curl https://portfolio-backend-api.azurewebsites.net/health
```

### Frontend Accessibility
```bash
curl https://portfolio-frontend.azurestaticapps.net
```

### Database Connectivity
- Verify SQL Server connection
- Verify MongoDB connection
- Check if indexes are created

## 🛠️ Troubleshooting

### Common Issues

1. **Build Failures**
   - Check .NET SDK version compatibility
   - Verify all NuGet packages are restored

2. **Deployment Failures**
   - Verify Azure subscription permissions
   - Check resource group and app service names
   - Ensure all connection strings are correct

3. **Runtime Errors**
   - Check application logs in Azure Portal
   - Verify environment variables are set correctly
   - Check CORS configuration

### Logs and Monitoring

1. **Azure Portal**
   - App Service → Logs → Application Logs
   - Static Web App → Monitoring → Logs

2. **Azure DevOps**
   - Pipeline runs → View logs
   - Test results and code coverage

## 🔐 Security Best Practices

1. **Use Key Vault** for sensitive configuration
2. **Enable HTTPS** and redirect HTTP
3. **Configure CORS** properly
4. **Use Managed Identity** when possible
5. **Enable Application Insights** for monitoring

## 📊 Cost Optimization

1. **Use Basic/Standard** App Service plans for development
2. **Scale down** during non-business hours
3. **Use consumption-based** services where possible
4. **Monitor usage** with Azure Cost Management

## 🎯 Next Steps

1. **Set up monitoring** with Application Insights
2. **Configure custom domain** and SSL certificates
3. **Set up staging environments**
4. **Implement blue-green deployment**
5. **Add performance testing** to your pipeline

## 📞 Support

- **Azure Documentation**: https://docs.microsoft.com/azure/
- **Azure DevOps**: https://docs.microsoft.com/azure/devops/
- **Static Web Apps**: https://docs.microsoft.com/azure/static-web-apps/
- **App Service**: https://docs.microsoft.com/azure/app-service/

---

**Happy Deploying! 🚀** 