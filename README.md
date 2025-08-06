
# Nicolette's Portfolio Website

A stunning, AI-inspired portfolio website built with React, TypeScript, and Tailwind CSS. Features a dynamic neural network background, interactive AI chatbot, and modern UI/UX design.

## ✨ Features

### 🎨 **Visual Design**
- **Dynamic Neural Network Background**: Interactive p5.js-based neural network visualization
- **Dark Theme**: Consistent dark theme with blue/purple/emerald gradient accents
- **Glass Morphism**: Modern backdrop blur effects throughout
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Responsive Design**: Mobile-first approach (375px - 1440px)

### 🤖 **AI Assistant**
- **Interactive Chatbot**: AI-powered assistant with pre-programmed responses
- **Quick Reply Buttons**: Common questions about skills, projects, contact info
- **Real-time Chat**: Instant responses with typing simulation
- **Professional UI**: Clean, modern chat interface

### 📱 **Sections**
- **Hero**: Full-screen introduction with neural network background
- **About**: Skills, certifications, and personal information
- **Projects**: Showcase of development work with filtering
- **Resume**: Download section with multiple format options
- **Contact**: Contact form and information
- **Footer**: Social links and additional information

### 🛠️ **Technical Stack**
- **React 18**: Latest React features and hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Advanced animations
- **p5.js**: Neural network background visualization
- **Lucide React**: Beautiful icons

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nicolettemashaba/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Resume.tsx      # Resume download
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Chatbot.tsx     # AI assistant
│   │   └── NeuralBackground.tsx # Neural network background
│   ├── contexts/           # React contexts
│   │   └── ThemeContext.tsx # Theme management
│   ├── types/              # TypeScript types
│   │   └── index.ts        # Type definitions
│   ├── App.tsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
│   ├── manifest.json       # PWA manifest
│   └── sw.js              # Service worker
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md              # This file
```

## 🎨 Customization

### Colors & Theme
The website uses a consistent color palette:
- **Primary**: Electric Blue (`#60A5FA`)
- **Secondary**: Neon Purple (`#8B5CF6`) 
- **Accent**: Emerald Green (`#34D399`)
- **Background**: Dark Gray (`#111827`)

### Adding Projects
Edit `src/components/Projects.tsx` to add your projects:

```typescript
{
  id: 1,
  title: "Your Project",
  description: "Project description",
  image: "https://images.unsplash.com/your-image",
  tags: ["React", "TypeScript"],
  category: "web",
  githubUrl: "https://github.com/your-repo",
  liveUrl: "https://your-demo.com"
}
```

### Updating Content
- **Hero**: Edit `src/components/Hero.tsx`
- **About**: Edit `src/components/About.tsx`
- **Contact**: Edit `src/components/Contact.tsx`
- **Resume**: Edit `src/components/Resume.tsx`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Configure custom domain if needed

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Key Dependencies
- `react` - UI library
- `framer-motion` - Animations
- `p5` - Neural network background
- `lucide-react` - Icons
- `tailwindcss` - Styling

## 📱 Features

### Responsive Design
- **Mobile**: 375px minimum
- **Tablet**: 768px breakpoint
- **Desktop**: 1440px maximum

### Accessibility
- ARIA labels throughout
- Keyboard navigation support
- Screen reader friendly
- High contrast support

### Performance
- Lazy loading images
- Optimized bundle size
- Service worker for caching
- PWA ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: hello@nicolettemashaba.dev
- **LinkedIn**: [Nicolette Mashaba](https://linkedin.com/in/nicolettemashaba)
- **GitHub**: [@nicolettemashaba](https://github.com/nicolettemashaba)

---

Made with ❤️ and lots of ⚡ by Nicolette Mashaba 