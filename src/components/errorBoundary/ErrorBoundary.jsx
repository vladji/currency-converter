import React from 'react';
import './errorBoundary.scss';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div className="error-boundary">
                    <h3>Something went wrong...</h3>
                    {this.state.error && this.state.error.toString()}
                </div>
            );
        }
        return this.props.children;
    }
}
