import React, { Component } from 'react';
import Navbar from './Navbar';

class Layout extends Component {
    state = {
        tabIndex: 0,
        tabList: [{ label: 'Card', id: 0 }, { label: 'Other', id: 1 }]
    };

    changeTab = tabId => {
        this.setState({
            tabIndex: tabId
        });
    }

    render() {
        const { tabList } = this.state;
        return (
            <div>
                <Navbar tabList={tabList} changeTab={this.changeTab} />
            </div>
        );
    }
}

export default Layout;