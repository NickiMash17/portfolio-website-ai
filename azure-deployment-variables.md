# Azure Deployment Environment Variables

## Required Azure DevOps Pipeline Variables

Set these variables in your Azure DevOps pipeline library:

### Backend Deployment Variables
```
AZURE_SUBSCRIPTION=your-azure-subscription-id
AZURE_WEBAPP_NAME=your-backend-app-name
AZURE_STATIC_WEB_APP_NAME=your-frontend-app-name
AZURE_STATIC_WEB_APPS_API_TOKEN=your-static-web-apps-token

# Database Connection Strings
SQL_CONNECTION_STRING=Server=tcp:your-sql-server.database.windows.net,1433;Initial Catalog=PortfolioDB;Persist Security Info=False;User ID=your-username;Password=your-password;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;
MONGO_CONNECTION_STRING=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/

# Azure Cognitive Services
COGNITIVE_SERVICES_ENDPOINT=https://your-cognitive-services.cognitiveservices.azure.com/
COGNITIVE_SERVICES_KEY=your-cognitive-services-key

# Azure Storage
STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=yourstorageaccount;AccountKey=yourkey;EndpointSuffix=core.windows.net

# Azure AD (Optional)
AZURE_AD_TENANT_ID=your-tenant-id
AZURE_AD_CLIENT_ID=your-client-id
AZURE_AD_CLIENT_SECRET=your-client-secret

# JWT Configuration
JWT_SECRET_KEY=your-super-secret-jwt-key-with-at-least-32-characters
JWT_ISSUER=https://your-domain.com
JWT_AUDIENCE=https://your-domain.com
```

## Azure Resources Required

### 1. Azure App Service (Backend)
- **Service Plan**: Basic B1 or higher
- **Runtime Stack**: .NET 8 (LTS)
- **Operating System**: Windows or Linux
- **Region**: Choose closest to your users

### 2. Azure Static Web Apps (Frontend)
- **Plan**: Free or Standard
- **Region**: Same as backend
- **Custom Domain**: Optional

### 3. Azure SQL Database (Optional)
- **Service Tier**: Basic or Standard
- **Compute**: 5 DTUs minimum
- **Storage**: 2 GB minimum

### 4. Azure Cosmos DB for MongoDB (Optional)
- **Capacity Mode**: Serverless
- **Region**: Same as other resources

### 5. Azure Cognitive Services
- **Resource Type**: Text Analytics
- **Pricing Tier**: Standard (S0) or Free (F0)

### 6. Azure Storage Account
- **Performance**: Standard
- **Redundancy**: LRS or GRS
- **Access Tier**: Hot

## Security Best Practices

1. **Use Azure Key Vault** for storing secrets
2. **Enable Managed Identity** for Azure services
3. **Configure Network Security Groups** to restrict access
4. **Enable Azure Security Center** monitoring
5. **Use Azure Application Gateway** for additional security layers

## Monitoring and Logging

1. **Application Insights** for backend monitoring
2. **Azure Monitor** for infrastructure metrics
3. **Log Analytics** for centralized logging
4. **Azure Alerts** for proactive monitoring

## Cost Optimization

1. **Use Dev/Test subscriptions** for development
2. **Enable auto-shutdown** for non-production resources
3. **Use reserved instances** for production workloads
4. **Monitor usage** with Azure Cost Management 