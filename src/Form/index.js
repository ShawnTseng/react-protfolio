import React, { Component } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import InputNumber from './InputNumber';

class Form extends Component {
    render() {
        return (
            <div>
                <Input />
                <hr />
                <Textarea />
                <hr />
                <InputNumber />
            </div>
        );
    }
}

export default Form;