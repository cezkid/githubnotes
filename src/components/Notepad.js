import { useState, useEffect } from "react";
import GithubRest from "./GithubRest";

const Notepad = (title, notes, resetValues)=> {

  // Reference Code / Test Array
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
  let [gistObj, setGistObj] = useState({})

  const genGistObj = ()=> {
    /***
     * Remap notes array to required gist object format
     */
    let gistFilesObj = {}
    notes.map(
      (note)=> gistFilesObj = {...gistFilesObj, [note.title]: {content:note.content} }
    );

    setGistObj({
      gist_id:gistID,
      description:title,
      files: gistFilesObj
    });

  }

  /**
   * Keep track of save and delete actions
   */
  const [action, setAction] = useState('');

  /**
   * gist ID is received from github when creating new gist
   * once received we can update and delete using the gist ID
   */
  const [gistID, setGistID] = useState('');


  /**
   * Initialize github REST request helper
   */
  const rest = GithubRest(action, gistObj, gistID, setGistID, resetValues);


  const createNotepad = ()=>{
    /**
     * Detect if title and note are filled
     */
    if (title && notes.length){
      genGistObj()
      setAction("POST");
    }else{
      console.log('please fill the forms')
    }
  }
  const readNotepad = ()=> {
  

  }
  const updateNotepad = ()=> {
    /**
     * Detect if title and note are filled
     */
    if (title && notes.length){
      /**
       * If gistId exist, it means we were able to save to github and can update
       * Also check if the last action was "DELETE" 
       */
      if (gistID && action !== "DELETE") {
        genGistObj();
        setAction("PATCH");
      }
      else {
        createNotepad();
      }
    }
    else if(!title){
      console.log('please add a notepad Title')
    }else{
      console.log('please create a note')
    }

  }
  /**
   * This function has two purposes:
   * - delete from github if gistID stored
   * - Clear Values
   */
  const deleteNotepad = ()=> {

    if (gistID) {
      setGistObj({
        gist_id:gistID,
      });
      setAction("DELETE");
    }
    resetValues()
  }

  return { createNotepad, readNotepad, updateNotepad, deleteNotepad }
}

export default Notepad