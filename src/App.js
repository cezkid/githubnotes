import { useState, useEffect } from "react";

import Button from "./components/elements/Button";

import NoteCreate from "./components/NoteCreate";
import NotepadTitle from "./components/NotepadTitle";
import NoteRender from "./components/NoteRender";
import Notepad from "./components/Notepad";

import GithubRest from "./components/GithubRest";

function App() {

  const blankData= {
    description: ``,
    files: {}
  }

  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState([]);

  const [githubObject, setGithubObject] = useState({description:title, files:notes});



  const pad = Notepad(githubObject, setGithubObject, blankData);
  

  return (
    <div className="container mx-auto">
      <h1 className="px-3">Notepad Application</h1>
      <div className="bg-white p-3 border rounded">
        <div className="flex flex-wrap justify-between align-bottom">
          <NotepadTitle titleFunc={setTitle}/>
          <div>
            <div className="flex gap-2">
            <Button onClick={pad.updateNotepad} variant="save">Save</Button>
            <Button onClick={pad.deleteNotepad} variant="delete">Delete</Button>
            </div>
          </div>
        </div>
        <h2>My Notes</h2>
        <NoteCreate/>

        <div>
          <NoteRender/>
        </div>
      </div>

    </div>
  );
}

export default App;
