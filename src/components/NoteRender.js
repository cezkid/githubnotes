import { useState, useEffect } from "react";
import Button from "./elements/Button";

import Note from "./Note";


/**
 * Component to render individual note and add a delete button
 * When field is edited, it also updates the corresponding note in the Notes array
 */
const NoteRender = ({ note, notes, setNotes })=> {

  const [title,setTitle] = useState(note.title)
  const [content,setContent] = useState(note.content)

  /**
   * get the index of note and adjust title and content
   */
  useEffect(() => {

    let noteIndex = notes.findIndex(n => n.id === note.id);
    notes[noteIndex].title = title;
    notes[noteIndex].content = content;
    
  }, [title,content])
  return(
    <div className="flex flex-wrap gap-2 py-2">
      <div className="flex fields-width flex-col gap-2">
        <Note title={title} content={content} setTitle={setTitle} setContent={setContent}/>
      </div>
      <div>
        <Button
          variant="delete"
          onClick={ ()=>{
            setNotes(
              notes.filter(n => n.id !== note.id)
            )
            }}
          >
          Delete
          </Button>
      </div>
    </div>
  )
}

export default NoteRender