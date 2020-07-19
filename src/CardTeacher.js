import React, { Component } from 'react';
import './Card.css';

class CardTeacher extends Component {
    render() {
        const { name, link } = this.props.data;

        return (
            // eslint-disable-next-line
            <a herf={link}>
                <span>{name}</span>
            </a>
        );
    }
}

export default CardTeacher;