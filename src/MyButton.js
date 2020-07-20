import React, { Component } from 'react';
import './MyButton.css';

class MyButton extends Component {
    render() {
        return (
            <button className="btn">{this.props.children}</button>
        );
    }
}

export default MyButton;