import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './FolderItem.css';

class FolderItem extends Component {
    render() { 
        return (
            <Link to={`/folder/${this.props.folder.id}`}>
                    <div className={this.props.isSelected ?'folder-item selected-folder' : 'folder-item' }>
                        <h2>
                            {this.props.folder.name}
                        </h2>
                    </div>
            </Link>
        );
    }
}

FolderItem.propTypes = {
    folder: PropTypes.object.isRequired,
    isSelected: PropTypes.bool
}
 
export default FolderItem;