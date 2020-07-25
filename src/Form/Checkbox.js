import React, { Component } from 'react';

class Checkbox extends Component {
    state = {
        checkboxValue: {
            male: false,
            female: false,
        }
    }

    onChange = e => {
        const key = e.target.value;
        this.setState(state => ({
            checkboxValue: {
                ...state.checkboxValue,
                [key]: !state.checkboxValue[key]
            }
        }))
    }

    render() {
        const { checkboxValue } = this.state;
        return (
            <div>
                <pre>{JSON.stringify(checkboxValue)}</pre>
                <input type="checkbox" value="male" onChange={this.onChange} checked={checkboxValue.male} />
                <label>Male</label>
                <input type="checkbox" value="female" onChange={this.onChange} checked={checkboxValue.female} />
                <label>Female</label>

            </div>
        );
    }
}

export default Checkbox;