import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import FolderItem from '../FolderItem/FolderItem';
import Error from '../Error/Error';
import './HomeSidebar.css';

class HomeSidebar extends Component {
    static contextType = NotefulContext;

    render() { 
        return (
            <div>
                <Error>
                    {this.context.folders.map((folder, index) => { 
                        return(
                            <FolderItem folder={folder} key={index} />
                        )
                    })}
                </Error>
                <Link to="/add-folder">
                    <button 
                        className="add-folder-button"
                    >
                        Add Folder
                    </button>
                </Link>
            </div>
        );
    }
}

export default HomeSidebar;