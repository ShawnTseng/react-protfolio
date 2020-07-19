import React, { Component } from 'react';

class CardDesc extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { isOpen } = this.state;
        const cn = `card__desc__text ${isOpen ? '' : 'less'}`;

        return (
            <div className="card__desc">
                <div className={cn}>
                    {this.props.children}
                </div>
                <button className="card__desc__button" onClick={this.toggle}>
                    {isOpen ? 'Less' : 'More'}
                </button>
            </div>
        );
    }
}

export default CardDesc;