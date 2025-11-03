# Netlify Deployment Script for Windows PowerShell
# This ensures the plugin runs correctly

Write-Host "🚀 Starting Netlify deployment..." -ForegroundColor Green

# Step 1: Install dependencies (ensure plugin is installed)
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Step 2: Build the project
Write-Host "🔨 Building Next.js app..." -ForegroundColor Yellow
npm run build

# Step 3: Deploy to Netlify
Write-Host "☁️ Deploying to Netlify..." -ForegroundColor Yellow
npx netlify-cli deploy --prod

Write-Host "✅ Deployment complete!" -ForegroundColor Green

