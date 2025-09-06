# 🚀 Quick Start: Deploy to Azure in 5 Steps

## ⚡ Immediate Actions Required

### 1. 🔑 Azure DevOps Variables Setup (5 minutes)
- [ ] Go to Azure DevOps → Pipelines → Library
- [ ] Create variable group: `Production`
- [ ] Add these variables:
  - `AZURE_SUBSCRIPTION`: Your subscription ID
  - `AZURE_WEBAPP_NAME`: portfolio-backend-api
  - `AZURE_STATIC_WEB_APP_NAME`: portfolio-frontend
  - `AZURE_STATIC_WEB_APPS_API_TOKEN`: (get from Static Web App)

### 2. 🏗️ Create Azure Resources (10 minutes)
```bash
# Option A: Use the automated script
./deploy-to-azure.sh

# Option B: Manual Azure Portal creation
# - Resource Group: portfolio-rg
# - App Service Plan: portfolio-plan (B1, Linux)
# - Web App: portfolio-backend-api (.NET 8)
# - Static Web App: portfolio-frontend
# - SQL Database: PortfolioDB
# - Cognitive Services: portfolio-cognitive
```

### 3. 🔧 Update Pipeline (2 minutes)
- [ ] Your `azure-pipelines.yml` is already updated
- [ ] Pipeline references `Production` variable group
- [ ] Ready to run!

### 4. 🚀 Deploy (5 minutes)
- [ ] Commit and push your changes
- [ ] Go to Pipelines → Pipelines
- [ ] Run the pipeline manually
- [ ] Watch the magic happen! ✨

### 5. ✅ Verify Deployment (3 minutes)
- [ ] Backend: `https://portfolio-backend-api.azurewebsites.net/health`
- [ ] Frontend: `https://portfolio-frontend.azurestaticapps.net`
- [ ] Check Azure DevOps pipeline results

## 🎯 What You'll Get

- **Backend API**: .NET 8 Web API with health checks
- **Frontend**: React/TypeScript app with AI features
- **Database**: SQL Server + MongoDB for analytics
- **AI Services**: Azure Cognitive Services integration
- **CI/CD**: Automated testing and deployment
- **Monitoring**: Built-in health checks and logging

## 🚨 If Something Goes Wrong

1. **Check pipeline logs** in Azure DevOps
2. **Verify Azure resources** in Azure Portal
3. **Check connection strings** in variable group
4. **Review this guide**: `DEPLOYMENT_GUIDE.md`

## 🎉 Success Indicators

- ✅ Pipeline runs without errors
- ✅ Backend responds to health check
- ✅ Frontend loads in browser
- ✅ Database connections established
- ✅ All tests pass

---

**Ready to deploy? Let's go! 🚀** 