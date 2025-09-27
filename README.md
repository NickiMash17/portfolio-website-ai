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

## Image Optimization

This project includes an image optimization script that automatically processes images in the `public/images` directory. The script generates multiple sizes and formats (WebP and AVIF) for better performance.

### Available Scripts

- `npm run optimize-images` - Processes all images in the `public/images` directory
- `npm run build` - Builds the project with optimized assets
- `npm run analyze` - Analyzes the bundle size

### Image Processing Details

The optimization script will:
1. Process all images in the `public/images` directory
2. Generate multiple sizes for each image (640px, 1024px, 1600px)
3. Create both WebP and AVIF versions of each size
4. Save optimized images to `public/optimized-images`

### Adding New Images

1. Place your images in the `public/images` directory
2. Run `npm run optimize-images`
3. Reference the optimized images in your components using the appropriate size and format

Example usage in React components:

```jsx
<picture>
  <source 
    srcSet={`/optimized-images/your-image@640w.avif 640w,
             /optimized-images/your-image@1024w.avif 1024w,
             /optimized-images/your-image@1600w.avif 1600w`}
    type="image/avif"
  />
  <source 
    srcSet={`/optimized-images/your-image@640w.webp 640w,
             /optimized-images/your-image@1024w.webp 1024w,
             /optimized-images/your-image@1600w.webp 1600w`}
    type="image/webp"
  />
  <img 
    src="/optimized-images/your-image.jpg" 
    alt="Description"
    className="w-full h-auto"
    loading="lazy"
  />
</picture>
```

### Dependencies

- `sharp` - For image processing
- `vite-plugin-compression` - For asset compression
- `vite-plugin-pwa` - For PWA support

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request 