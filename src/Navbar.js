import React, { Component } from 'react';

class Navbar extends Component {
    state = {
        tabIndex: 0,
        tabList: [{ label: 'Card', id: 0 }, { label: 'Other', id: 1 }]
    };

    changeTab = tabId => {
        this.setState({
            tabIndex: tabId
        })
    }

    render() {
        const { tabList } = this.state;
        return (
            <div>
                {tabList.length > 0 &&
                    <ul>
                        {tabList.map(tabItem =>
                            <li key={tabItem.id} onClick={() => { this.changeTab(tabItem.id) }}>
                                {tabItem.label}
                            </li>)}
                    </ul>
                }
            </div>
        );
    }
}

export default Navbar;