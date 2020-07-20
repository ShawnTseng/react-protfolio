import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
background: #cde;
border-radius: 20px;
font-size: 2em;
width: 250px;
text-align: center;
padding: 0.5em 0;
margin-right: 0.5em;
`

class MyButton extends Component {
    render() {
        return (
            <Button>{this.props.children}</Button>
        );
    }
}

export default MyButton;