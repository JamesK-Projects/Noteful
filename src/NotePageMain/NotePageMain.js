import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import NoteItem from '../NoteItem/NoteItem';
import PropTypes from 'prop-types';
import './NotePageMain.css';

class NotePageMain extends Component {
    static contextType = NotefulContext;
    render() { 
        console.log(this.context.notes)
        return (
            this.context.notes.map((note, index) => {
                console.log(note)
                console.log(this.props.match.params)
                if(note.id == this.props.match.params.noteId){
                    
                    return(
                        <div key={index}>
                            <NoteItem note={note} />
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