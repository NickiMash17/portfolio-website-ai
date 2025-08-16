# Project Structure

This document outlines the clean, professional structure of the Portfolio Website AI project.

## 📁 Root Directory Structure

```
portfolio-website-ai/
├── 📁 src/                          # Frontend source code
│   ├── 📁 components/               # React components
│   ├── 📁 contexts/                 # React contexts
│   ├── 📁 hooks/                    # Custom React hooks
│   ├── 📁 types/                    # TypeScript type definitions
│   ├── App.tsx                      # Main application component
│   ├── main.tsx                     # Application entry point
│   └── index.css                    # Global styles
├── 📁 portfolio-backend/            # .NET backend API
│   ├── 📁 Controllers/              # API controllers
│   ├── 📁 Services/                 # Business logic services
│   ├── 📁 Models/                   # Data models
│   ├── 📁 Data/                     # Database context
│   ├── 📁 Middleware/               # Custom middleware
│   ├── 📁 Configuration/            # Configuration classes
│   ├── 📁 Tests/                    # Unit tests
│   ├── Program.cs                    # Application entry point
│   ├── PortfolioBackend.csproj      # Project file
│   └── appsettings*.json            # Configuration files
├── 📁 public/                       # Static assets
│   ├── favicon-16x16.png            # Favicon (16x16)
│   ├── favicon-32x32.png            # Favicon (32x32)
│   ├── manifest.json                # PWA manifest
│   └── sw.js                        # Service worker
├── 📁 .github/                      # GitHub Actions workflows
│   └── 📁 workflows/                # CI/CD workflows
├── 📁 .git/                         # Git repository
├── 📁 node_modules/                 # Node.js dependencies
├── .gitignore                       # Git ignore rules
├── azure-pipelines.yml              # Azure DevOps CI/CD
├── index.html                       # HTML entry point
├── package.json                     # Node.js dependencies
├── package-lock.json                # Locked dependencies
├── postcss.config.js                # PostCSS configuration
├── README.md                        # Project documentation
├── PROJECT_STRUCTURE.md             # This file
├── staticwebapp.config.json         # Azure Static Web Apps config
├── tailwind.config.js               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
└── vite.config.js                   # Vite build configuration
```

## 🧹 Cleanup Summary

### Removed Files
- **Multiple Azure pipeline files** - Kept only the main `azure-pipelines.yml`
- **Duplicate deployment guides** - Consolidated into main README
- **Performance and audit documents** - Moved relevant info to main README
- **Build artifacts** - Removed `dist/` and `assets/` directories
- **Backup files** - Removed `.backup` files
- **Solution files** - Removed unnecessary `.sln` files
- **Example environment files** - Removed `env.example` files
- **Docker files** - Removed Docker-related files
- **Duplicate GitHub Actions** - Kept only essential workflows

### Kept Essential Files
- **Core application files** - All source code and components
- **Configuration files** - Build and deployment configs
- **Main documentation** - Clean, professional README
- **CI/CD pipelines** - Essential Azure and GitHub workflows
- **Dependencies** - Package management files

## 🎯 Benefits of Clean Structure

1. **Professional Appearance** - Clean, organized structure
2. **Easy Navigation** - Clear separation of concerns
3. **Maintainable** - No clutter or duplicate files
4. **Deployment Ready** - Essential configs preserved
5. **Developer Friendly** - Clear project organization

## 📋 Maintenance Guidelines

- **Build artifacts** should never be committed (use `.gitignore`)
- **Deployment files** should be minimal and essential only
- **Documentation** should be consolidated and up-to-date
- **Dependencies** should be properly managed and locked
- **Configuration** should be environment-specific and secure

## 🚀 Next Steps

1. **Review the cleaned structure**
2. **Update any deployment configurations** if needed
3. **Test the build process** to ensure everything works
4. **Commit the clean structure** to version control
5. **Share the professional project** with stakeholders 