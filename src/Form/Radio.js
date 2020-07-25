import React, { Component } from 'react';

class Radio extends Component {
    state = {
        radioValue: 'male'
    }

    onChange = e => {
        this.setState({
            radioValue: e.target.value
        })
    }

    render() {
        const { radioValue } = this.state;
        return (
            <div>
                <h3>{radioValue}</h3>
                <input type="radio" value="male" onChange={this.onChange} checked={radioValue === 'male'} />
                <label>Male</label>
                <input type="radio" value="female" onChange={this.onChange} checked={radioValue === 'female'} />
                <label>Female</label>
            </div>
        );
    }
}

export default Radio;