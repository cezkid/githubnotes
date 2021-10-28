import React, { useState, useEffect } from "react";
import GithubRest from "./GithubRest";

const Notepad = (data, setData, blankData)=> {

  //let date = ()=>{return new Date().toLocaleString()}
  // let testData = {
  //   description: `Nopepad @ ${date()}`,
  //   files: {
  //     "Note 1": {
  //       content:"Note 1 Content"
  //     },
  //     "Note 2": {
  //       content:"Note 2 Content"
  //     }
  //   }
  // }


  const [action, setAction] = useState('');

  const [gistID, setGistID] = useState('');

  console.log(gistID);

  const newGithubRest = GithubRest(action, data, gistID, setGistID);

  const createNotepad = ()=>{
    if (data.title && data.files){
      setData(data);
      setAction("POST");
    }else{
      console.log('please fill the forms')
    }
    //console.log("create new clicked")
  }
  const readNotepad = ()=> {
  

  }
  const updateNotepad = ()=> {
    
    if (data.title && data.files){
      if (gistID) {
        setData({gist_id:gistID, ...data});
        setAction("PATCH");
      }else{
        createNotepad();
      }
    }
    else{
      console.log('please fill the forms')
    }

  }
  const deleteNotepad = ()=> {
    setAction("DELETE")
    setData(blankData);
    setGistID(null);
  }

  return { createNotepad, readNotepad, updateNotepad, deleteNotepad }
}

export default Notepad