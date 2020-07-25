import React, { Component } from 'react';

class InputNumber extends Component {
    state = {
        numberValue: 0
    }

    onChange = e => {
        this.setState({
            numberValue: parseInt(e.target.value)
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.numberValue}</h3>
                <input type="number" numberValue={this.state.numberValue} onChange={this.onChange} />
            </div>
        );
    }
}

export default InputNumber;