import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import HomePage from './HomePage/HomePage';
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import Error from './Error/Error';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
	state={
		notes: [],
		folders: [],
		error: null,
	}

	setNotes = notes => {
		this.setState({
			notes,
			error: null
		})
	}

	setFolders = folders => {
		this.setState({
			folders,
			error: null
		})
	}

	deleteNote = noteId => {
		const newNotes = this.state.notes.filter(n => 
			n.id != noteId
		)
		console.log(noteId)
		console.log(newNotes)
		this.setState({
			notes: newNotes
		},
		() => {
			this.props.history.push('/')
		}
		)
	}

	addFolder = () => {
		const url='http://localhost:9090/';
		const urlFolders = url + 'folders';
		fetch(urlFolders, {
			method: 'GET',
		})
		.then(res => {
			if(!res.ok) {
				throw new Error(res.status)
			}
			return res.json()
		})
		.then(this.setFolders)
		.catch(error => this.setState({error}))
		this.props.history.push('/')
	}

	addNote = () => {
		const url='http://localhost:9090/';
		const urlNotes = url + 'notes';
		fetch(urlNotes, {
			method: 'GET',
		})
		.then(res => {
			if(!res.ok) {
				throw new Error(res.status)
			}
			return res.json()
		})
		.then(this.setNotes)
		.catch(error => this.setState({error}))
		this.props.history.push('/')
	}

	componentDidMount() {
		this.addFolder()
		this.addNote()
	}

	render() { 
		console.log(this.state)
		console.log(this.props)
		const contextValue = {
			notes: this.state.notes,
			folders: this.state.folders,
			deleteNote: this.deleteNote,
			addFolder: this.addFolder,
			addNote: this.addNote 
		}
		console.log(contextValue);
		return (		
			<div>
				<NotefulContext.Provider value={contextValue}>
					<header>
						<Link to='/'>
							<h1>Noteful</h1>
						</Link>
					</header>
					<Error>
						<Route
							exact path='/'
							component={HomePage}
						/>
						<Route	
							path='/folder/:folderId'
							component={FolderPage}
						/>
						<Route	
							path='/note/:noteId'
							component={NotePage}
						/>
						<Route 
							path='/add-folder'
							component={AddFolder}
						/>
						<Route 
							path='/add-note'
							component={AddNote}
						/>
					</Error>
				</NotefulContext.Provider>
			</div>
		);
  	}
}

App.propTypes = {
	history: PropTypes.object.isRequired
};
 
export default withRouter(App);
