import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import ValidationError from '../ValidationError';
import './AddNote.css';

class AddNote extends Component {
    static contextType = NotefulContext;
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            content: '',
            folder_id: '1'
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
        this.setState({folder_id: event.target.value})
        console.log(event)
    }

    addNoteRequest = (newNote) => {
        const url='http://localhost:8000/api/';
        const urlNotes = url + 'notes';
        fetch(urlNotes, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ 
                name: this.state.name,
                content: this.state.content,
                folder_id: this.state.folder_id,
                date_created: new Date()
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
            this.context.addNote(data);
        })
        .catch(error => {
            console.error(error)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.state.name;
        const content = this.state.content;
        const folder_id = this.state.folder_id;
        console.log('Name: ', name);
        console.log('Content: ', content);
        console.log('Folder: ', folder_id);
        if(this.state.name){
            this.addNoteRequest(name, content, folder_id);
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
            <div>
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
                    <label htmlFor="new-note-folder_id">Select the folder for the note to go into: </label>
                    <select value={this.state.folder_id} onChange={this.addNoteFolder}>
                        {this.context.folders.map(f => {
                            return (
                                <option className="new-note-folder" key={f.id} value={f.id}>{f.name}</option>
                            )
                        })}
                    </select><br />
                    <button className="add-note-submit" type="submit">Add Note</button>
                </form>
            </div>
        );
    }
}

 
export default AddNote;