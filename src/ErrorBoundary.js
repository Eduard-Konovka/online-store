import React from 'react';
import { getLanguage } from 'functions';
import { languageWrapper } from 'middlewares';
import { LANGUAGE } from 'constants';

const languageDeterminer = obj => languageWrapper(getLanguage(), obj);

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
      return (
        <div className="error-boundary">
          {languageDeterminer(LANGUAGE.errorBoundary)}
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
