import React, { Component } from 'react';
import Navbar from './Navbar';
import Card from './../Card/index';
import MyButton from './../StyledComponent/MyButton';
import YourButton from './../StyledComponent/YourButton';
import FileTree from './../FileTree/index';

import lesson from './../lesson-react.json';

class Layout extends Component {
    state = {
        tabIndex: 0,
        tabList: [
            { label: 'Card', id: 0 },
            { label: 'Styled Component Try', id: 1 },
            { label: 'File Tree', id: 2 }
        ]
    };

    changeTab = tabId => {
        this.setState({
            tabIndex: tabId
        });
    }

    render() {
        const { tabIndex, tabList } = this.state;
        return (
            <div>
                <Navbar tabList={tabList} changeTab={this.changeTab} />
                {tabIndex === 0 && <Card data={lesson} />}
                {tabIndex === 1 &&
                    <>
                        <MyButton>Hello</MyButton>
                        <YourButton>World</YourButton>
                    </>
                }
                {tabIndex === 2 && <FileTree />}
            </div>
        );
    }
}

export default Layout;