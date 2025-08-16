
# Portfolio Website AI

A modern, AI-powered portfolio website built with React, TypeScript, and Vite, featuring a .NET backend with Azure Cognitive Services integration.

## 🚀 Features

- **AI-Powered Resume Generation** - Generate professional resumes using AI
- **Interactive Chatbot** - AI chatbot for visitor engagement
- **Neural Network Background** - Dynamic, animated background
- **Responsive Design** - Modern UI with Tailwind CSS
- **Performance Optimized** - Built with performance best practices
- **Azure Integration** - Backend services hosted on Azure

## 🏗️ Project Structure

```
portfolio-website-ai/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── contexts/          # React contexts
│   ├── hooks/             # Custom React hooks
│   └── types/             # TypeScript type definitions
├── portfolio-backend/      # .NET backend API
│   ├── Controllers/       # API controllers
│   ├── Models/            # Data models
│   ├── Services/          # Business logic services
│   └── Data/              # Database context
├── public/                 # Static assets
└── dist/                   # Build output (gitignored)
```

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations

### Backend
- **.NET 8** Web API
- **Entity Framework Core** for data access
- **MongoDB** for document storage
- **Azure Cognitive Services** for AI features

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- .NET 8 SDK
- MongoDB (local or cloud)

### Frontend Development
```bash
npm install
npm run dev
```

### Backend Development
```bash
cd portfolio-backend
dotnet restore
dotnet run
```

## 📦 Build & Deploy

```bash
# Build frontend
npm run build

# Build backend
cd portfolio-backend
dotnet publish -c Release
```

## 🔧 Configuration

Copy `env.example` to `.env` and configure your environment variables:

```bash
cp env.example .env
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request 