import React from 'react';

interface ErrorBoundaryProps {
    fallback?: (error: any, info: any) => React.ReactNode,
}

interface ErrorBoundaryState {
    error: { error: any, info: any };
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            error: { error, info },
        });
    }

    render() {
        if (this.state.error !== null) {
            return this.props.fallback(
                this.state.error.error,
                this.state.error.info,
            );
        }

        return this.props.children;
    }
}

export {
    ErrorBoundary as default,
};
