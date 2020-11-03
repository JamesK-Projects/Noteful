import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import NoteItem from '../NoteItem/NoteItem';
import PropTypes from 'prop-types';
import './NotePageMain.css';

class NotePageMain extends Component {
    static contextType = NotefulContext;
    render() { 
        return (
            this.context.notes.map((note, index) => {
                if(note.id === this.props.match.params.noteId){
                    return(
                        <div>
                            <NoteItem note={note} key={index}/>
                            <p className="note-content">{note.content}</p>
                        </div>
                    )
                }
            })
        );
    }
}



NotePageMain.propTypes = {
    match: PropTypes.object.isRequired
}
 
export default NotePageMain;