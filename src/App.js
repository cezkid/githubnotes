import React, { useState, useEffect } from "react";

import githubToken from "./githubtoken";

import Button from "./components/elements/Button";

import NoteCreate from "./components/NoteCreate";
import NotepadTitle from "./components/NotepadTitle";
import NoteRender from "./components/NoteRender";

function App() {

  return (
    <div className="App">
      <h1>Notepad Application</h1>
      <div>
        <div>
          <NotepadTitle/>
          <div>
            <Button>Save</Button>
            <Button>Delete</Button>
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
