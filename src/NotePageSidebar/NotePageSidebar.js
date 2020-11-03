import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import BackButton from '../BackButton/BackButton';
import PropTypes from 'prop-types';
import './NotePageSidebar.css';

class NotePageSidebar extends Component {
    static contextType = NotefulContext;
    render() { 
        let selectedNote = this.context.notes.filter((note) => {
            return note.id == this.props.match.params.noteId
        })
        if(!selectedNote.length){
            return null
        }
        const folder = this.context.folders.filter((folder) => {
            return folder.id == selectedNote[0].folderId
        })
        console.log(folder)
        return (
            <div>
                <BackButton {...this.props}/>
                <div className="note-folder">
                    Located in {folder[0].name} folder
                </div>
            </div>
        );   
    }
}


NotePageSidebar.propTypes = {
    match: PropTypes.object.isRequired
}
 
export default NotePageSidebar;