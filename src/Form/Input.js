import React, { Component } from 'react';

class Input extends Component {
    state = {
        textValue: 'Hi~~~',
    }

    onChange = e => {
        this.setState({
            textValue: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h3>{this.state.textValue}</h3>
                <input type="text" value={this.state.textValue} onChange={this.onChange} />
            </div>
        );
    }
}

export default Input;