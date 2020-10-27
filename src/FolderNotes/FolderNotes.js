import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import NoteItem from '../NoteItem/NoteItem';
import Error from '../Error/Error';
import PropTypes from 'prop-types';

class FolderNotes extends Component {
    static contextType = NotefulContext;
    render() { 
        return (
            <div>
                <Error>
                    {this.context.notes.map((note, index) => {
                        if(note.folderId === this.props.match.params.folderId){
                            return(
                                <NoteItem note={note} key={index} />
                            )
                        }
                    })}
                    <Link to="/add-note">
                        <button 
                            className="add-note-button"
                        >
                            Add Note
                        </button>
                    </Link>
                </Error>
            </div>
        );
    }
}

FolderNotes.propTypes = {
    value: PropTypes.object
}
 
export default FolderNotes;


