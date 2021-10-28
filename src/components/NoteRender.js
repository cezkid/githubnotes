import { useState } from "react";
import Button from "./elements/Button";

import Note from "./Note";

const NoteRender = ({ note, notes })=> {

  const [title,setTitle] = useState(note.title)
  const [content,setContent] = useState(note.content)

  return(
    <div className="flex flex-wrap gap-2">
      <div className="flex flex-col gap-1">
        <Note title={title} content={content} setTitle={setTitle} setContent={setContent}/>
      </div>
      <div>
        <Button
          variant="delete"
          onClick={ ()=>{console.log('delete') }}
          >
          Delete
          </Button>
      </div>
    </div>
  )
}

export default NoteRender