#!/bin/bash
set -e

echo "🚀 Building and deploying portfolio..."

# Navigate to project directory
cd /home/nicolettemashaba/portfolio-website-ai

# Build the project
echo "🔨 Building for production..."
npm run build

# Check git status
echo "📝 Checking git status..."
git status

# Add all changes
git add .

# Commit if there are changes
if ! git diff --staged --quiet; then
    echo "💾 Committing changes..."
    git commit -m "Deploy: Portfolio update $(date '+%Y-%m-%d %H:%M:%S')"
    
    # Push to GitHub
    echo "⬆️ Pushing to GitHub..."
    git push origin main
else
    echo "ℹ️ No changes to commit"
fi

# Deploy to Surge
echo "🌐 Deploying to Surge.sh..."
npm run deploy:surge

echo "✅ Deployment complete!"
echo "🔗 Live at: https://nicolette-portfolio.surge.sh"
