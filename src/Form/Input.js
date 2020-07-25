import React, { Component } from 'react';

class Input extends Component {
    state = {
        textValue: 'Hi~~~',
        textareaValue: 'multi!!!'
    }

    onChange = e => {
        this.setState({
            textValue: e.target.value
        })
    }

    onChangeTextarea = e => {
        this.setState({
            textareaValue: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.textValue}</h3>
                <input type="text" textValue={this.state.textValue} onChange={this.onChange} />
                <h3>{this.state.textareaValue}</h3>
                <textarea textValue={this.state.textareaValue} onChange={this.onChangeTextarea} />
            </div>
        );
    }
}

export default Input;