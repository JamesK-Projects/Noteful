import React from 'react';

const NotefulContext = React.createContext({
    notes: [],
    folder: [],
    deleteNote: () => {},
    addFolder: () => {},
    addNote: () => {}
})

export default NotefulContext;