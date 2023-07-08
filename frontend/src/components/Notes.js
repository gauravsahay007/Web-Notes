import React, { useContext, useEffect } from 'react'
import noteContext from '../context/Notes/NoteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import { useNavigate } from 'react-router-dom';


const Notes = () => {
    const navigate = useNavigate();
    const context = useContext(noteContext);
    console.log(context);
    const { notes, getNotes } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        }
        else {
            navigate('/login');
        }
    }, []);
    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h5>Your notes!</h5>
                {notes.map(note => (
                    <NoteItem key={note._id} note={note} />
                ))}
            </div>
        </>

    )
}

export default Notes