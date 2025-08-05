# Local Development Setup

This guide will help you set up and run the AI-powered portfolio website locally for development.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- .NET 8 SDK
- SQL Server (LocalDB or Docker)
- MongoDB (Local or Docker)
- Azure account (for AI features)

### 1. Clone and Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-website-ai.git
cd portfolio-website-ai

# Install frontend dependencies
npm install

# Copy environment file
cp env.example .env
```

### 2. Configure Environment Variables
Edit `.env` file with your settings:
```env
# Frontend Environment Variables
VITE_API_BASE_URL=http://localhost:5000/api
VITE_AZURE_STORAGE_CONNECTION_STRING=your_storage_connection_string
VITE_MONGO_URI=mongodb://localhost:27017/PortfolioAnalytics
VITE_AZURE_COGNITIVE_SERVICES_KEY=your_cognitive_services_key
VITE_AZURE_BOT_SERVICE_KEY=your_bot_service_key
```

### 3. Setup Backend
```bash
# Navigate to backend directory
cd portfolio-backend

# Restore dependencies
dotnet restore

# Update appsettings.json with your connection strings
# Run database migrations
dotnet ef database update

# Start backend server
dotnet run
```

### 4. Start Frontend
```bash
# In a new terminal, from the root directory
npm run dev
```

### 5. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Swagger Documentation: http://localhost:5000/swagger

## 🛠️ Development Commands

### Frontend
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

### Backend
```bash
# Start development server
dotnet run

# Run tests
dotnet test

# Create database migration
dotnet ef migrations add MigrationName

# Update database
dotnet ef database update

# Build for production
dotnet publish -c Release
```

## 📊 Database Setup

### SQL Server (LocalDB)
```bash
# Install SQL Server LocalDB
# On Windows: Included with Visual Studio
# On macOS/Linux: Use Docker

# Create database
sqlcmd -S "(localdb)\MSSQLLocalDB" -Q "CREATE DATABASE PortfolioDB"
```

### MongoDB
```bash
# Install MongoDB
# On macOS: brew install mongodb-community
# On Ubuntu: sudo apt install mongodb
# On Windows: Download from mongodb.com

# Start MongoDB service
sudo systemctl start mongod

# Or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## 🔧 Configuration

### Backend Configuration (appsettings.json)
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=PortfolioDB;Trusted_Connection=true;TrustServerCertificate=true;"
  },
  "MongoDB": {
    "ConnectionString": "mongodb://localhost:27017",
    "DatabaseName": "PortfolioAnalytics"
  },
  "Azure": {
    "StorageConnectionString": "your_storage_connection_string",
    "CognitiveServicesKey": "your_cognitive_services_key",
    "CognitiveServicesEndpoint": "https://your-resource.cognitiveservices.azure.com/"
  }
}
```

### Frontend Configuration (.env)
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_AZURE_STORAGE_CONNECTION_STRING=your_storage_connection_string
VITE_MONGO_URI=mongodb://localhost:27017/PortfolioAnalytics
VITE_AZURE_COGNITIVE_SERVICES_KEY=your_cognitive_services_key
VITE_AZURE_BOT_SERVICE_KEY=your_bot_service_key
```

## 🧪 Testing

### Frontend Tests
```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests (if configured)
npm run test:e2e
```

### Backend Tests
```bash
# Run all tests
dotnet test

# Run specific test project
dotnet test portfolio-backend.Tests

# Run with coverage
dotnet test --collect:"XPlat Code Coverage"
```

## 🔍 Debugging

### Frontend Debugging
1. Open browser developer tools
2. Check Console for errors
3. Use React Developer Tools extension
4. Check Network tab for API calls

### Backend Debugging
1. Use Visual Studio or VS Code
2. Set breakpoints in controllers
3. Check application logs
4. Use Swagger UI for API testing

## 📱 Features to Test

### 1. Portfolio Sections
- [ ] Hero section with particle effects
- [ ] Skills section with progress bars
- [ ] Projects section with filtering
- [ ] About section with timeline
- [ ] Contact section with form

### 2. AI Features
- [ ] Chatbot in bottom-right corner
- [ ] Sentiment analysis on contact form
- [ ] Project recommendations
- [ ] TensorFlow.js integration

### 3. Backend APIs
- [ ] Projects CRUD operations
- [ ] Contact form submission
- [ ] Resume PDF generation
- [ ] Analytics tracking

### 4. Responsive Design
- [ ] Mobile layout (375px)
- [ ] Tablet layout (768px)
- [ ] Desktop layout (1440px)

## 🚨 Common Issues

### Frontend Issues
1. **Port already in use**
   ```bash
   # Kill process on port 5173
   lsof -ti:5173 | xargs kill -9
   ```

2. **Dependencies not found**
   ```bash
   # Clear npm cache
   npm cache clean --force
   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors**
   ```bash
   # Check TypeScript configuration
   npx tsc --noEmit
   ```

### Backend Issues
1. **Database connection failed**
   - Verify SQL Server is running
   - Check connection string
   - Ensure database exists

2. **MongoDB connection failed**
   - Verify MongoDB is running
   - Check connection string
   - Ensure collections exist

3. **Azure services not working**
   - Verify API keys are correct
   - Check service endpoints
   - Ensure services are enabled

## 📈 Performance Tips

### Frontend Optimization
1. Use React.memo for expensive components
2. Implement lazy loading for images
3. Optimize bundle size with code splitting
4. Use service worker for caching

### Backend Optimization
1. Enable response compression
2. Implement caching strategies
3. Optimize database queries
4. Use async/await properly

## 🔒 Security Considerations

### Development
1. Never commit sensitive data
2. Use environment variables
3. Validate all inputs
4. Implement proper CORS

### Production
1. Use HTTPS only
2. Implement rate limiting
3. Add authentication
4. Regular security updates

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [ASP.NET Core Documentation](https://docs.microsoft.com/en-us/aspnet/core/)
- [Azure Documentation](https://docs.microsoft.com/en-us/azure/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For local development issues:
- Check the troubleshooting section
- Review application logs
- Search existing issues
- Create a new issue with details

---

**Happy Coding! 🚀** 