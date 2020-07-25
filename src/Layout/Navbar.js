import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const { tabList, changeTab } = this.props;
        return (
            <div>
                {tabList.length > 0 &&
                    <ul>
                        {tabList.map(tabItem =>
                            <li key={tabItem.id} onClick={() => { changeTab(tabItem.id) }}>
                                {tabItem.label}
                            </li>)}
                    </ul>
                }
            </div>
        );
    }
}

export default Navbar;