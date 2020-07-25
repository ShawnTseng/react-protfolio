import React, { Component } from 'react';

const gender = [
    { label: 'Male', value: 0 },
    { label: 'Female', value: 1 }
]

class Select extends Component {
    state = {
        selectValue: `${gender[0].value}`
    }

    onChange = e => {
        this.setState({
            selectValue: e.target.value
        })
    }

    render() {
        const { selectValue } = this.state;
        return (
            <div>
                <h3>{gender.find(g=>`${g.value}`===selectValue).label}</h3>
                <select value={selectValue} onChange={this.onChange}>
                    {gender.map(g => (
                        <option value={g.value} key={g.value}>{g.label}</option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Select;