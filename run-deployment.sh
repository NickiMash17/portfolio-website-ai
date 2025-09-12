#!/bin/bash

# Execute build and deployment
cd /home/nicolettemashaba/portfolio-website-ai

# Build project
npm run build

# Git operations
git add .
git commit -m "Deploy: Portfolio update $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"
git push origin main

# Deploy to Surge
npm run deploy:surge
