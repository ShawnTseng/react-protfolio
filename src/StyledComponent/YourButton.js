import React, { Component } from 'react';
import style from './YourButton.module.scss';

class YourButton extends Component {
    render() {
        return (
            <button className={style.btn}>{this.props.children}</button>
        );
    }
}

export default YourButton;