import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section" style={{ paddingTop: 120, minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: 16 }}>
              <i className="fas fa-exclamation-triangle" />
            </div>
            <h2 style={{ marginBottom: 12 }}>Something went wrong</h2>
            <p style={{ color: 'var(--gray-500)', marginBottom: 24 }}>
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <button className="btn btn-primary" onClick={() => window.location.reload()}>
              Refresh Page
            </button>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}
