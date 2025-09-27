import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('Error caught by boundary:', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Component stack:', errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="p-4 text-center">
          Something went wrong. Please refresh the page.
        </div>
      );
    }
    return this.props.children;
  }
}

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen font-sans relative overflow-x-hidden">
        <Navigation />
        <main
          className="pt-20 sm:pt-24 md:pt-28 min-h-[calc(100vh-80px)]"
          role="main"
          aria-label="Main content"
        >
          {children}
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};