import { useState, useEffect } from "react";

import Button from "./components/elements/Button";

import NoteCreate from "./components/NoteCreate";
import NotepadTitle from "./components/NotepadTitle";
import NoteRender from "./components/NoteRender";
import Notepad from "./components/Notepad";
import Note from "./components/Note";

function App() {

  /**
   * Track notepad title
   */
  const [title, setTitle] = useState('');

  /**
   * track notes array
   */
  const [notes, setNotes] = useState([]);

  /**
   * Helper function resets title and notes values
   * @function
   */
  const resetValues = ()=> {
    setTitle('');
    setNotes([]);
  }

  /**
   * Intitialize Notepad
   */
  const pad = Notepad(title, notes, resetValues);

  /**
   * Render Form
   */
  return (
    <div className="container mx-auto">
      <h1 className="px-3">Notepad Application</h1>
      <div className="bg-white p-3 border rounded">
        <div className="flex flex-wrap justify-between align-bottom">
          <NotepadTitle title={title} titleFunc={setTitle}/>
          <div>
            <div className="flex gap-2">
            <Button onClick={pad.updateNotepad} variant="save">Save</Button>
            <Button onClick={pad.deleteNotepad} variant="delete">Delete</Button>
            </div>
          </div>
        </div>
        <h2>My Notes</h2>
        <NoteCreate notes={notes} setNotes={setNotes}/>

        <div>
          {
            notes.map(
              (note)=> (
                <NoteRender key={note.id} note={note} notes={notes} setNotes={setNotes}/>
              )
            )
          }
        </div>
      </div>

    </div>
  );
}

export default App;
