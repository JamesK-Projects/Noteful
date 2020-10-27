import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import NoteItem from '../NoteItem/NoteItem';
import Error from '../Error/Error';
import './HomeMain.css';

class HomeMain extends Component {
    static contextType = NotefulContext;
    render() { 
        return (
            <div>
                <Error>
                    {this.context.notes.map((note, index) => {
                        return(
                            <NoteItem note={note} key={index} />
                        )
                    })}
                </Error>
                <Link to="/add-note">
                    <button 
                        className="add-note-button"
                    >
                        Add Note
                    </button>
                </Link>
            </div>
        );
    }
}
 
export default HomeMain;