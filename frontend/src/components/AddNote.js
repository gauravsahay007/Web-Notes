import React, { useContext, useState } from 'react'
import noteContext from '../context/Notes/NoteContext'

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({
        title: '',
        description: '',
        tag: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }


    return (

        <div className="container my-3">
            <h3>Add Note!</h3>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control"
                        id="exampleInputEmail1"
                        value={note.title}
                        onChange={(e) => {
                            setNote({
                                ...note,
                                title: e.target.value
                            })
                        }
                        }
                        aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control"
                        value={note.description}
                        onChange={(e) => {
                            setNote({
                                ...note,
                                description: e.target.value
                            })
                        }
                        }
                        id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button>
            </form >
        </div>
    )
}

export default AddNote