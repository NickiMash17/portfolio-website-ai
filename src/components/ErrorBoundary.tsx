import React from 'react';

type ErrorBoundaryState = { hasError: boolean; error?: Error };

export default class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Runtime error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-6">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-bold mb-2">Something went wrong.</h1>
            <p className="mb-4 text-cyan-300">{this.state.error?.message}</p>
            <pre className="text-xs opacity-75">Check the browser console for details.</pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
