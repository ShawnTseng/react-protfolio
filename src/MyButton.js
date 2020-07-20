import React, { Component } from 'react';
import style from './MyButton.module.css';

class MyButton extends Component {
    render() {
        return (
            <button className={style.btn}>{this.props.children}</button>
        );
    }
}

export default MyButton;