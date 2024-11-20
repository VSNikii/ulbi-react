import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info){
    console.error("Error caught in boundary: ", error, info);
  }

  render(){
    if(this.state.hasError) {
      return <h1>Что то пошло не так</h1>
    }
    return this.props.children;
  }
}
