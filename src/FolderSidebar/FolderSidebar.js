import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import FolderItem from '../FolderItem/FolderItem';
import Error from '../Error/Error';
import PropTypes from 'prop-types';

class FolderSidebar extends Component {
    static contextType = NotefulContext;
    render(){
        return(
            <>
                <Error>
                    {this.context.folders.map((folder, index) => { 
                        if(folder.id !== this.props.match.params.folderId){
                            return (     
                                    <FolderItem folder={folder} key={index} />
                            )
                        }
                        else{
                            return (
                                    <FolderItem folder={folder} key={index} isSelected={true}/>
                            )
                        }
                    })}
                </Error>
                <Link to="/add-folder">
                    <button 
                        className="add-folder-button"
                    >
                        Add Folder
                    </button>
                </Link>
            </>
        )
    }
}

FolderSidebar.propTypes = {
    value: PropTypes.object
}
 
export default FolderSidebar;




