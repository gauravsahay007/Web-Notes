import React, { useState } from 'react';
import noteContext from './NoteContext';

const NoteState = (props) => {
    const data = []


    //get all notes from the database
    const getNotes = async () => {
        const response = await fetch(`${process.env.REACT_APP_URL}/notes/getallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem('token')}`
            }
        }
        );
        const notes = await response.json();
        console.log(notes);
        // setNotes(notes);

    }


    //add a note
    const addNote = (title, description, tag) => {
        //API Calls
        const note = {
            "user": "62a8653051d1c20e8964bae5",
            "title": title,
            "tag": tag,
            "description": description,
            "_id": "62a865ea51d1c20e8964bae8",
            "__v": 0
        }
        setNotes(notes.concat(note));
    }

    //delete a note
    const deleteNote = (id) => {
        setNotes(notes.filter(note => note._id !== id));
    }
    // update note
    const updateNote = (id, title, description, tag) => {
        setNotes(notes.map(note => {
            if (note._id === id) {
                note.title = title;
                note.description = description;
                note.tag = tag;
            }
            return note;
        }
        ));
    }
    const [notes, setNotes] = useState(data);
    console.log(props);
    console.log(props.children);
    return (
        <noteContext.Provider value={{
            notes,
            setNotes,
            addNote,
            deleteNote,
            updateNote,
            getNotes
        }}>
            {props.children}
        </noteContext.Provider>
    )


}

export default NoteState;