import React, { Component } from 'react';
class Content extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
                marginTop: 100, 
                marginBottom: 30
            }}>
                {this.props.children}
            </div>
        );
    }
}

export default Content;