import React, { useState, useEffect } from "react";
import GithubRest from "./GithubRest";

const Notepad = ()=> {


  const testData = {
    description: "Nopepad Title",
    files: {
      "Note 1": {
        content:"Note 1 Content"
      },
      "Note 2": {
        content:"Note 2 Content"
      }
    }
  }

  const [action, setAction] = useState('');
  const [data, setData] = useState({});
  const [gistID, setGistID] = useState('');

console.log(gistID);

  const git = GithubRest(action, data, gistID, setGistID);

  const createNotepad = ()=>{
    setAction("POST");
    setData(testData);
  }
  const readNotepad = ()=> {
  

  }
  const updateNotepad = ()=> {
    setAction("PATCH");
    setData(testData);

  }
  const deleteNotepad = ()=> {
    setAction("DELETE")
    setData();
  }

  return { createNotepad, readNotepad, updateNotepad, deleteNotepad }
}

export default Notepad