import React, { Component } from 'react';
import files from './../assets/files.json';
import FileNode from './FileNode';

class FileTree extends Component {
    render() {
        return (
            <div>
                <FileNode {...files} />
            </div>
        );
    }
}

export default FileTree;