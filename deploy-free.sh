#!/bin/bash

# 🆓 FREE Azure Deployment Script
# This script helps you deploy your portfolio for FREE

echo "🚀 FREE Azure Portfolio Deployment"
echo "=================================="
echo "💰 Cost: $0/month"
echo ""

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI not found. Please install it first:"
    echo "   https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
fi

# Check if logged in to Azure
if ! az account show &> /dev/null; then
    echo "🔐 Please log in to Azure first:"
    echo "   az login"
    exit 1
fi

echo "✅ Azure CLI is ready"
echo ""

# Get user input
read -p "Enter your name for resource naming (e.g., nicolettemashaba): " USERNAME
read -p "Enter your preferred region (e.g., eastus, westus2, westeurope): " REGION

# Set resource names
RESOURCE_GROUP="portfolio-rg-$USERNAME"
STATIC_WEB_APP="portfolio-frontend-$USERNAME"

echo ""
echo "🔧 Creating Azure resources..."
echo "Resource Group: $RESOURCE_GROUP"
echo "Static Web App: $STATIC_WEB_APP"
echo "Region: $REGION"
echo ""

# Create resource group
echo "📦 Creating resource group..."
az group create --name $RESOURCE_GROUP --location $REGION

# Create static web app (FREE tier)
echo "🌐 Creating Azure Static Web App (FREE)..."
az staticwebapp create \
    --name $STATIC_WEB_APP \
    --resource-group $RESOURCE_GROUP \
    --location $REGION \
    --source https://github.com/NickiMash17/portfolio-website-ai \
    --branch main \
    --app-location "/" \
    --output-location "dist"

echo ""
echo "✅ Azure Static Web App created successfully!"
echo ""
echo "🔑 Next steps:"
echo "1. Go to Azure Portal: https://portal.azure.com"
echo "2. Find your Static Web App: $STATIC_WEB_APP"
echo "3. Click 'Manage deployment tokens'"
echo "4. Copy the token"
echo "5. Go to Azure DevOps → Pipelines → Variables"
echo "6. Add variable: AZURE_STATIC_WEB_APPS_API_TOKEN = [your-token]"
echo "7. Add variable: AZURE_STATIC_WEB_APP_NAME = $STATIC_WEB_APP"
echo ""
echo "🌐 Your portfolio will be available at:"
echo "   https://$STATIC_WEB_APP.azurestaticapps.net"
echo ""
echo "💰 Total cost: $0/month (FOREVER FREE!)"
echo ""
echo "🎉 Happy coding!" 