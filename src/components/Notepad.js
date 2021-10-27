import React, { useState, useEffect } from "react";
import GithubRest from "./GithubRest";

const Notepad = ()=> {

  let date = ()=>{return new Date().toLocaleString()}
  let testData = {
    description: `Nopepad @ ${date()}`,
    files: {
      "Note 1": {
        content:"Note 1 Content"
      },
      "Note 2": {
        content:"Note 2 Content"
      }
    }
  }
  let newData = {
    description: `New Nopepad @ ${date()}`,
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
  const [data, setData] = useState(null);
  const [gistID, setGistID] = useState('');

console.log(gistID);

  const git = GithubRest(action, data, gistID, setGistID);

  const createNotepad = ()=>{
    setData(newData);
    setAction("POST");
    console.log("create new")

  }
  const readNotepad = ()=> {
  

  }
  const updateNotepad = ()=> {
    
    if (data){
      setData({gist_id:gistID, ...testData});
      setAction("PATCH");
      console.log("update")
    } else {
      createNotepad()
    }

  }
  const deleteNotepad = ()=> {
    setAction("DELETE")
    setData(null);
    setGistID(null);
  }

  return { createNotepad, readNotepad, updateNotepad, deleteNotepad }
}

export default Notepad