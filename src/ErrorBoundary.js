import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    console.error('Information about this error: ', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="error">Oops! Something went wrong...</div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
