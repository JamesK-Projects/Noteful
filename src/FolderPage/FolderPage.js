import React, {Component} from 'react';
import FolderSidebar from '../FolderSidebar/FolderSidebar';
import FolderNotes from '../FolderNotes/FolderNotes';
import PropTypes from 'prop-types';

class FolderPage extends Component {
    render() { 
        return (
            <div className="layout">
                <div className="sidebar">
                    <FolderSidebar {...this.props}/>
                </div>
                <div className="main">
                    <FolderNotes {...this.props}/>
                </div>
            </div>
        );
    }
}

FolderPage.propTypes = {
    value: PropTypes.object
}
 
export default FolderPage; 