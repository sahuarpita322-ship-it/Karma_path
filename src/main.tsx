import React, { StrictMode, Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Unregister stale service workers in development to prevent caching old chunks
if (typeof window !== 'undefined') {
  try {
    const legacyKeys = [
      'karma-path-storage',
      'karma-path-storage-v1',
      'karma-path-storage-v2',
      'karma-path-storage-v3',
      'karma-path-storage-v4',
      'karma-path-storage-v5',
      'karma-path-storage-v6'
    ];
    legacyKeys.forEach((k) => localStorage.removeItem(k));
  } catch (e) {
    // Ignore storage errors
  }
}

if ('serviceWorker' in navigator) {
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
      }
    }).catch((err) => console.log('SW unregister error:', err));
    
    if ('caches' in window) {
      caches.keys().then((names) => {
        for (const name of names) {
          caches.delete(name);
        }
      }).catch((err) => console.log('Cache clear error:', err));
    }
  }
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('RootErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          background: '#0c0c14',
          color: '#f8fafc',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '600px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,87,34,0.3)',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)'
          }}>
            <h1 style={{ color: '#ff5722', fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>
              Karma-Path Application Error
            </h1>
            <p style={{ color: '#cbd5e1', fontSize: '14px', marginBottom: '16px' }}>
              An error occurred during page rendering:
            </p>
            <pre style={{
              background: '#050508',
              color: '#fca5a5',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '12px',
              overflowX: 'auto',
              textAlign: 'left',
              marginBottom: '20px'
            }}>
              {this.state.error?.message || 'Unknown runtime error'}
            </pre>
            <button
              onClick={() => {
                localStorage.removeItem('karma-path-storage-v2');
                window.location.reload();
              }}
              style={{
                background: 'linear-gradient(135deg, #ff5722, #ea580c)',
                color: '#fff',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Reset Session & Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RootErrorBoundary>
        <App />
      </RootErrorBoundary>
    </StrictMode>,
  );
}
