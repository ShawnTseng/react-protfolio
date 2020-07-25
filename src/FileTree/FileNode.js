import React, { Component } from 'react';
import './index.css';

class FileNode extends Component {
    state = {
        open: false,
    }

    toggleOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        const { name, files } = this.props;
        const { open } = this.state;
        if (files) {
            return (
                <div>
                    <div className={`folder ${open ? 'open' : ''}`} onClick={this.toggleOpen}>{name}</div>
                    {!open ? null :
                        (<ul>
                            {files.map((file) => <FileNode {...file} />)}
                        </ul>)
                    }
                </div>
            );
        } else {
            return <li>{name}</li>
        }
    }
}

export default FileNode;