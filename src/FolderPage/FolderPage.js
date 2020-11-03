import React, {Component} from 'react';
import FolderSidebar from '../FolderSidebar/FolderSidebar';
import FolderNotes from '../FolderNotes/FolderNotes';

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

 
export default FolderPage; 