import React, { Component } from 'react';

class Input extends Component {
    state = {
        textareaValue: 'multi!!!'
    }

    onChangeTextarea = e => {
        this.setState({
            textareaValue: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.textareaValue}</h3>
                <textarea value={this.state.textareaValue} onChange={this.onChangeTextarea} />
            </div>
        );
    }
}

export default Input;