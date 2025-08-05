
# Nicolette's AI-Powered Portfolio Website

A stunning, futuristic portfolio website showcasing full-stack development skills with AI integration, built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### **Futuristic AI-Inspired Design**
- **Neon Color Scheme**: Cyan (#00D4FF) and Pink (#FF007A) accents
- **Dark Theme**: Professional dark gray (#1A1A1A) background
- **Particle Animations**: Interactive animated background in hero section
- **Smooth Animations**: Framer Motion powered transitions and hover effects

### **Responsive Design**
- **Mobile-First**: Optimized for 375px mobile screens
- **Desktop Ready**: Perfect display on 1440px desktop screens
- **Accessible**: ARIA labels, alt text, and keyboard navigation

### **Interactive Components**
- **Hero Section**: Full-screen with particle effects and floating chatbot
- **Projects Gallery**: Filterable project cards with live demos and GitHub links
- **About Section**: Professional bio with skills and certification timeline
- **Resume Download**: Technical and general resume options
- **Contact Form**: Interactive form with floating AI chatbot assistant

## 🚀 Tech Stack

### **Frontend**
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons

### **Design System**
- **Typography**: Inter font family
- **Colors**: Neon cyan/pink with dark grays
- **Spacing**: Consistent padding/margins
- **Animations**: Fade-ins, scale effects, and hover states

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Hero section with particles
│   ├── About.tsx         # About section with skills
│   ├── Projects.tsx      # Projects gallery with filters
│   ├── Resume.tsx        # Resume download section
│   ├── Contact.tsx       # Contact form with chatbot
│   └── Chatbot.tsx       # AI chatbot component
├── App.tsx               # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and animations
```

## 🎨 Design Specifications

### **Color Palette**
- **Primary Background**: Dark gray (#1A1A1A)
- **Accent Colors**: Neon cyan (#00D4FF), Neon pink (#FF007A)
- **Text Colors**: White (#FFFFFF) for headings, Light gray (#D1D5DB) for body

### **Typography**
- **Font**: Inter (Google Fonts)
- **Sizes**: 5xl for H1, 3xl for H2, xl for H3, base for body
- **Weights**: Bold for headings, regular for body text

### **Animations**
- **Framer Motion**: Fade-ins, scale effects, stagger animations
- **Hover Effects**: Scale transforms and glow effects
- **Particles**: Interactive background animations

## 🛠️ Installation & Setup

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**
```bash
# Clone the repository
git clone <repository-url>
cd portfolio-website-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Build for Production**
```bash
# Build the application
npm run build

# Preview the build
npm run preview
```

## 📱 Responsive Design

### **Mobile (375px)**
- Single-column layouts
- Reduced font sizes
- Stacked navigation
- Touch-friendly buttons

### **Desktop (1440px)**
- Multi-column layouts
- Full navigation menu
- Hover effects
- Enhanced animations

## 🎯 Key Sections

### **Hero Section**
- Full-screen animated background
- Particle effects with cyan dots
- Floating chatbot icon
- Smooth scroll indicator
- Call-to-action button

### **Projects Section**
- Filterable project gallery (All, AI, Full-Stack)
- Project cards with images and descriptions
- Technology tags
- Live demo and GitHub links
- Hover animations

### **About Section**
- Professional avatar with glow effect
- Skills grid with hover animations
- Certification timeline
- Responsive two-column layout

### **Resume Section**
- Circuit board background pattern
- Technical and general resume options
- Download functionality
- Skills and certifications overview

### **Contact Section**
- Interactive contact form
- Floating AI chatbot assistant
- Contact information cards
- Social media links

## 🤖 AI Features

### **Chatbot Assistant**
- Floating chat interface
- Quick message buttons
- Simulated AI responses
- Professional conversation flow

### **Interactive Elements**
- Hover effects on all interactive elements
- Smooth transitions between states
- Loading animations
- Form validation

## 🎨 Customization

### **Adding Your Information**
1. **Personal Details**: Update name, bio, and contact information
2. **Projects**: Add your projects to the `projects` array in `Projects.tsx`
3. **Skills**: Modify the skills array in `About.tsx`
4. **Certifications**: Update the certifications timeline
5. **Images**: Replace placeholder images with your own

### **Styling Customization**
- **Colors**: Modify CSS variables in `index.css`
- **Fonts**: Change font imports in `index.css`
- **Animations**: Adjust Framer Motion variants
- **Layout**: Modify Tailwind classes

### **Adding New Sections**
1. Create new component in `src/components/`
2. Import and add to `App.tsx`
3. Add navigation link
4. Style with Tailwind classes

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Netlify**
```bash
# Build the project
npm run build

# Deploy to Netlify
# Upload the dist folder to Netlify
```

### **GitHub Pages**
```bash
# Add to package.json
"homepage": "https://yourusername.github.io/portfolio-website-ai"

# Deploy
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

## 📊 Performance

### **Optimizations**
- **Lazy Loading**: Images load on scroll
- **Code Splitting**: Component-based bundling
- **Minification**: Production builds are optimized
- **Caching**: Static assets are cached

### **Accessibility**
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color ratios
- **Reduced Motion**: Respects user preferences

## 🔧 Development

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

### **Code Quality**
- **TypeScript**: Type-safe development
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code formatting
- **Git Hooks**: Pre-commit code quality checks

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Contact

- **Email**: nicolette@example.com
- **LinkedIn**: [Nicolette Mashaba](https://linkedin.com/in/nicolette)
- **GitHub**: [@nicolette](https://github.com/nicolette)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS** 