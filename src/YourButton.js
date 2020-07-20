import React, { Component } from 'react';
import './YourButton.css';

class YourButton extends Component {
    render() {
        return (
            <button className="btn2">{this.props.children}</button>
        );
    }
}

export default YourButton;