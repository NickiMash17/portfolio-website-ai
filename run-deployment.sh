#!/bin/bash
set -e

echo "🚀 Starting deployment process..."

# Navigate to project directory
cd /home/nicolettemashaba/portfolio-website-ai

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are we in the right directory?"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

# Git operations with error handling
echo "📝 Committing changes..."
git add .
if git diff --staged --quiet; then
    echo "ℹ️ No changes to commit"
else
    git commit -m "Deploy: Portfolio update $(date '+%Y-%m-%d %H:%M:%S')"
    echo "⬆️ Pushing to GitHub..."
    git push origin main
fi

# Deploy to Surge
echo "🌐 Deploying to Surge..."
npm run deploy:surge

echo "✅ Deployment completed successfully!"
echo "🔗 Live at: https://nicolette-portfolio.surge.sh"
