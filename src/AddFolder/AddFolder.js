import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import './AddFolder.css';

class AddFolder extends Component {
    static contextType = NotefulContext;
    
    constructor(props){
        super(props);
        this.state = {
            folder: {
                value: ''
            }
        }
    }

    addFolder(folder) {
        this.setState({folder: {value: folder}})
    }

    addFolderRequest = (folderName) => {
        const url='http://localhost:9090/';
        const urlFolders = url + 'folders';
        const { folder } = this.state;
        fetch(urlFolders, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name: folder.value })
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
            console.log(folderName)
            this.context.addFolder(folderName);
        })
        .catch(error => {
            console.error(error)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { folder } = this.state;
        console.log('Folder: ', folder.value)
        if(this.state.folder.value){
            this.addFolderRequest(folder);    
        } else {
            window.alert('Please enter a name for your new folder')
        }
        
    }

    render() { 
        return (
            <NotefulContext.Consumer>
                {(context) => (
                    <form 
                        className="add-folder-form" 
                        onSubmit = {e =>
                            this.handleSubmit(
                                e,
                                context.addFolder
                            ) 
                        }
                    >
                        <label htmlFor="new-folder">Enter new folder name </label><br />
                        <input type="text" name="new-folder" id="new-folder" onChange={e => this.addFolder(e.target.value)}/>
                        <button className="add-folder-submit" type="submit" >Add Folder</button>
                    </form>
                )}
            </NotefulContext.Consumer>
        );
    }
}

 
export default AddFolder;