import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import ValidationError from '../ValidationError';
import Error from '../Error/Error';
import PropTypes from 'prop-types';
import './AddNote.css';

class AddNote extends Component {
    static contextType = NotefulContext;
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            content: '',
            folderId: 'b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1'
        };
        this.addNoteFolder = this.addNoteFolder.bind(this);
    }

    addNoteName(noteName) {
        this.setState({name: noteName})
    }

    addNoteContent(noteContent) {
        this.setState({content: noteContent})
    }

    addNoteFolder(event) {
        this.setState({folderId: event.target.value})
        console.log(event)
    }

    addNoteRequest = (newNote) => {
        const url='http://localhost:9090/';
        const urlNotes = url + 'notes';
        fetch(urlNotes, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ 
                name: this.state.name,
                content: this.state.content,
                folderId: this.state.folderId
             })
        })   
        .then(res => {
            if(!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return res.json()
        })
        .then(data => {
            console.log(newNote)
            this.context.addNote(newNote);
        })
        .catch(error => {
            console.error(error)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.state.name;
        const content = this.state.content;
        const folderId = this.state.folderId;
        console.log('Name: ', name);
        console.log('Content: ', content);
        console.log('Folder: ', folderId);
        if(this.state.name){
            this.addNoteRequest(name, content, folderId);
        } else {
            window.alert('Please enter a name for your new note')
        }
    }

    validateNoteName() {
        const noteName = this.state.name.trim();
        if(noteName.length === 0){
            return "Name of note is required";
        } else if(noteName.length > 40){
            return "Please choose a shorter name"
        }
    }

    render() { 
        const nameError = this.validateNoteName();
        return (
            <Error>
                {console.log(this.context)}
                <form 
                    className="add-note-form"
                    onSubmit = {e => 
                        this.handleSubmit(e)
                    }
                >
                    <label htmlFor="new-note">Enter name of new note: </label>
                    <input type="text" name="new-note-name" id="new-note-name" onChange={e => this.addNoteName(e.target.value)}/>
                    {<ValidationError message={nameError} />}<br />
                    <label htmlFor="new-note-content">Enter content for new note: </label>
                    <input type="text" name="new-note-content" id="new-note-content" onChange={e => this.addNoteContent(e.target.value)}/><br />
                    <label htmlFor="new-note=folderId">Select the folder for the note to go into: </label>
                    <select value={this.state.folderId} onChange={this.addNoteFolder}>
                        {this.context.folders.map(f => {
                            return (
                                <option className="new-note-folder" key={f.id} value={f.id}>{f.name}</option>
                            )
                        })}
                    </select><br />
                    <button className="add-note-submit" type="submit">Add Note</button>
                </form>
            </Error>
        );
    }
}



AddNote.propTypes = {
    value: PropTypes.object
}
 
export default AddNote;