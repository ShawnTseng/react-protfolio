import React, { Component } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import InputNumber from './InputNumber';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './Checkbox';

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
                <hr />
                <Checkbox />
            </div>
        );
    }
}

export default Form;