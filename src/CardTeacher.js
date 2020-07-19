import React from 'react';
import './Card.css';

const CardTeacher = ({ data: { name, link, image } }) => {
    return (
        // eslint-disable-next-line
        <a herf={link}>
            <img src={image} alt="" className="card__avatar" />
            <span>{name}</span>
        </a>
    );
}

export default CardTeacher;