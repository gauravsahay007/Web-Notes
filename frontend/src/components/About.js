import React, { useContext } from 'react'
import NoteState from '../context/Notes/NoteContext';

function About() {
    const a = useContext(NoteState);
    console.log(NoteState.name);
    console.log(a);
    return (
        <div>This is about page and my name is {a.name}</div>
    )
}

export default About