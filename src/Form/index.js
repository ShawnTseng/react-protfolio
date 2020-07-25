import React, { Component } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import InputNumber from './InputNumber';
import Select from './Select';
import Radio from './Radio';

class Form extends Component {
    render() {
        return (
            <div>
                <Input />
                <hr />
                <Textarea />
                <hr />
                <InputNumber />
                <hr />
                <Select />
                <hr />
                <Radio />
            </div>
        );
    }
}

export default Form;