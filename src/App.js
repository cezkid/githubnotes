import React, { useState, useEffect } from "react";

import githubToken from "./githubtoken";

import Button from "./components/elements/Button";

import NoteCreate from "./components/NoteCreate";
import NotepadTitle from "./components/NotepadTitle";
import NoteRender from "./components/NoteRender";

function App() {

  return (
    <div className="container mx-auto">
      <h1 className="px-3">Notepad Application</h1>
      <div className="bg-white p-3 border rounded">
        <div className="flex flex-wrap justify-between align-bottom">
          <NotepadTitle/>
          <div>
            <div className="flex gap-2">
            <Button variant="save">Save</Button>
            <Button variant="delete">Delete</Button>
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
