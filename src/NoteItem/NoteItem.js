import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import './NoteItem.css';

class NoteItem extends Component {
    static contextType = NotefulContext;
    deleteNoteRequest = (noteId, cb) => {
        const url='http://localhost:8000/api/';
        const urlNotes = url + 'notes/';
        fetch(urlNotes + `${this.props.note.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        }) 
        
        .then(data => {
            console.log(noteId)
            console.log(cb)
            cb(noteId)
        })
        .catch(error => {
            console.error(error)
        })
    }


    render() { 
        return (
            <NotefulContext.Consumer>
                {(context) => (
                    <div className="note-item">
                        <div className="left-side">
                            <Link to={`/note/${this.props.note.id}`}>
                                <h2>{this.props.note.name}</h2>
                            </Link>
                            {/* Modified on {this.props.note.modified} */}
                        </div>
                        <button 
                            className="delete-note right-side"
                            onClick = {() => {
                                this.deleteNoteRequest(
                                    this.props.note.id,
                                    context.deleteNote
                                )
                            }}
                        >
                            Delete Note
                        </button>
                    </div>
                )}
            </NotefulContext.Consumer>

        );
    }
}

NoteItem.propTypes = {
    note: PropTypes.object.isRequired
}
 
export default NoteItem;