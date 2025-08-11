# 🚀 **AZURE DEPLOYMENT SETUP CHECKLIST**

## **Phase 1: Azure Resources Creation**

### **1. Azure App Service (Backend)**
- [ ] Go to Azure Portal → Create Resource → Web → Web App
- [ ] **Basics:**
  - Subscription: Your subscription
  - Resource Group: Create new or use existing
  - Web App name: `portfolio-backend-[yourname]` (must be unique)
  - Publish: Code
  - Runtime stack: .NET 8 (LTS)
  - Operating System: Windows or Linux
  - Region: Choose closest to your users
- [ ] **Hosting Plan:**
  - Plan type: Basic (B1) or Standard (S1) for production
  - SKU and size: B1 (1 core, 1.75 GB RAM) minimum
- [ ] **Review + Create**

### **2. Azure Static Web Apps (Frontend)**
- [ ] Go to Azure Portal → Create Resource → Web → Static Web App
- [ ] **Basics:**
  - Subscription: Same as backend
  - Resource Group: Same as backend
  - Static Web App name: `portfolio-frontend-[yourname]`
  - Region: Same as backend
  - Build Details: Skip for now (we'll configure via pipeline)
- [ ] **Review + Create**

### **3. Azure SQL Database (Optional)**
- [ ] Go to Azure Portal → Create Resource → Databases → SQL Database
- [ ] **Basics:**
  - Subscription: Same as above
  - Resource Group: Same as above
  - Database name: `PortfolioDB`
  - Server: Create new server
  - Location: Same as above
  - Authentication method: SQL authentication
- [ ] **Compute + Storage:**
  - Service tier: Basic
  - Compute: 5 DTUs
  - Storage: 2 GB
- [ ] **Review + Create**

### **4. Azure Cosmos DB for MongoDB (Optional)**
- [ ] Go to Azure Portal → Create Resource → Databases → Azure Cosmos DB
- [ ] **Basics:**
  - Subscription: Same as above
  - Resource Group: Same as above
  - Account name: `portfolio-mongodb-[yourname]`
  - API: MongoDB
  - Location: Same as above
- [ ] **Review + Create**

## **Phase 2: Azure DevOps Pipeline Configuration**

### **1. Access Your Pipeline**
- [ ] Go to Azure DevOps → Your Project → Pipelines
- [ ] Find the `azure-pipelines.yml` pipeline
- [ ] Click "Edit" → "Variables"

### **2. Add Required Variables**
Add these variables to your pipeline:

#### **Core Deployment Variables**
```
AZURE_SUBSCRIPTION = [Your Azure Subscription ID]
AZURE_WEBAPP_NAME = portfolio-backend-[yourname]
AZURE_STATIC_WEB_APP_NAME = portfolio-frontend-[yourname]
AZURE_STATIC_WEB_APPS_API_TOKEN = [Get from Static Web App]
```

#### **Database Connection Strings**
```
SQL_CONNECTION_STRING = Server=tcp:[server].database.windows.net,1433;Initial Catalog=PortfolioDB;Persist Security Info=False;User ID=[username];Password=[password];MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;
MONGO_CONNECTION_STRING = mongodb+srv://[username]:[password]@[cluster].mongodb.net/
```

#### **Azure Services**
```
COGNITIVE_SERVICES_ENDPOINT = https://[resource].cognitiveservices.azure.com/
COGNITIVE_SERVICES_KEY = [your-cognitive-services-key]
STORAGE_CONNECTION_STRING = DefaultEndpointsProtocol=https;AccountName=[account];AccountKey=[key];EndpointSuffix=core.windows.net
```

#### **Security & JWT**
```
JWT_SECRET_KEY = [generate-32-character-secret]
JWT_ISSUER = https://[your-domain].azurewebsites.net
JWT_AUDIENCE = https://[your-domain].azurewebsites.net
```

### **3. Get Static Web Apps API Token**
- [ ] Go to Azure Portal → Your Static Web App
- [ ] Click "Manage deployment tokens"
- [ ] Copy the token and add to `AZURE_STATIC_WEB_APPS_API_TOKEN`

## **Phase 3: Update Configuration Files**

### **1. Update appsettings.Production.json**
Replace placeholder values in `portfolio-backend/appsettings.Production.json`:
- [ ] SQL connection string
- [ ] MongoDB connection string
- [ ] Azure Cognitive Services details
- [ ] Azure Storage details

### **2. Update CORS Origins**
In `portfolio-backend/appsettings.Production.json`:
- [ ] Update `Cors__AllowedOrigins` with your actual Static Web App URL

## **Phase 4: Deploy**

### **1. Trigger Deployment**
- [ ] Push any changes to main branch (triggers pipeline automatically)
- [ ] Or manually trigger the pipeline

### **2. Monitor Deployment**
- [ ] Watch the pipeline execution
- [ ] Check for any errors in build or deployment stages
- [ ] Verify both backend and frontend deployments

### **3. Post-Deployment Verification**
- [ ] Test backend API: `https://[backend-name].azurewebsites.net/health`
- [ ] Test frontend: `https://[frontend-name].azurestaticapps.net`
- [ ] Check CORS configuration
- [ ] Test Azure service integrations

## **🔑 Quick Reference URLs**

After deployment, your services will be available at:
- **Backend API**: `https://[backend-name].azurewebsites.net`
- **Frontend**: `https://[frontend-name].azurestaticapps.net`
- **Swagger Docs**: `https://[backend-name].azurewebsites.net/swagger`

## **⚠️ Important Notes**

1. **Cost Management**: Start with Basic/Free tiers for testing
2. **Security**: Never commit real secrets to source control
3. **Monitoring**: Enable Application Insights for backend monitoring
4. **Backup**: Set up backup strategies for databases

## **🎯 Next Steps After Setup**

1. **Test the deployment** using the health check endpoints
2. **Configure custom domains** if needed
3. **Set up monitoring and alerts**
4. **Optimize performance** based on usage patterns

---

**Status**: 🟡 **READY FOR AZURE SETUP**  
**Next Action**: Create Azure resources and configure pipeline variables 