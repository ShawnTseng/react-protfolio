import React, { Component } from 'react';
import './Card.css';

class CardTeacher extends Component {
    render() {
        const { name } = this.props.data;

        return (
            <span>{name}</span>
        );
    }
}

export default CardTeacher;