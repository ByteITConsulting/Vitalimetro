import React from 'react';

/**
 * Error Boundary Component - Catches React errors and prevents them from crashing the app
 * Security: Prevents stack traces and sensitive info from being exposed to users
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: 'Algo deu errado',
      errorId: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Generate a unique error ID for reference
    const errorId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    
    // Log error safely (don't expose stack traces)
    console.error(`[Error ID: ${errorId}] An error occurred:`, error.message);

    return {
      hasError: true,
      errorMessage: 'Algo deu errado. Por favor, tente novamente.',
      errorId: errorId,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Security: Don't log full error info in production
    if (process.env.NODE_ENV === 'development') {
      console.error('Error details:', error);
      console.error('Error info:', errorInfo);
    } else {
      // In production, only log error ID and message
      const errorId = this.state.errorId;
      console.error(`Error [${errorId}]: ${error.message}`);
      
      // Optionally: Send to error tracking service (e.g., Sentry)
      // Note: Never send sensitive data through client-side error logging
      // if (window.errorReporter) {
      //   window.errorReporter.captureException(error, { errorId });
      // }
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      errorMessage: 'Algo deu errado',
      errorId: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.container} role="alert" aria-live="assertive">
          <div style={styles.content}>
            <h2 style={styles.title}>⚠️ Erro Inesperado</h2>
            <p style={styles.message}>{this.state.errorMessage}</p>
            <p style={styles.helpText}>
              Se o problema persistir, recarregue a página ou contato suporte.
            </p>
            {process.env.NODE_ENV === 'development' && (
              <p style={styles.debugInfo}>
                Error ID: <code>{this.state.errorId}</code>
              </p>
            )}
            <button
              onClick={this.handleReset}
              style={styles.button}
              type="button"
              aria-label="Tentar novamente"
            >
              Tentar Novamente
            </button>
            <button
              onClick={() => window.location.reload()}
              style={{ ...styles.button, marginLeft: '10px' }}
              type="button"
              aria-label="Recarregar página"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    fontFamily: '"Inter", sans-serif',
  },
  content: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '40px',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: {
    marginTop: '0',
    marginBottom: '15px',
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
  },
  message: {
    marginBottom: '10px',
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.5',
  },
  helpText: {
    marginBottom: '20px',
    fontSize: '14px',
    color: '#999',
  },
  debugInfo: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
    fontSize: '12px',
    color: '#666',
    fontFamily: '"JetBrains Mono", monospace',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.2s',
  },
};

export default ErrorBoundary;
