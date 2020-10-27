import React, { Component } from 'react';
import NotePageSidebar from '../NotePageSidebar/NotePageSidebar';
import NotePageMain from '../NotePageMain/NotePageMain';
import PropTypes from 'prop-types';


class NotePage extends Component {
    render() { 
        return (
            <div className="layout">
                <div className="sidebar">
                    <NotePageSidebar {...this.props}/>
                </div>
                <div className="main">
                    <NotePageMain {...this.props}/>
                </div>
            </div>
        );
    }
}

NotePage.propTypes = {
    value: PropTypes.object
}
 
export default NotePage;