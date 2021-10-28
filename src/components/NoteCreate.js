import { useState, useEffect } from "react";
import Button from "./elements/Button";
import Input from "./elements/Input";
import TextArea from "./elements/TextArea";

const NoteCreate = ({notes,notesFunc})=> {

  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')

  return(
    <form className="flex flex-col gap-1">
      <Input
        placeholder="Enter note title"
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
      />

      <TextArea
        placeholder="Enter note..."
        value={content}
        onChange={(e)=>{setContent(e.target.value)}}
      />
      <div>
      <Button
        variant="add"
        onClick={ (e)=>{ e.preventDefault(); notesFunc({...notes,[title]:{content:content}})}  }
        >Add</Button>
      </div>
    </form>
  )
}

export default NoteCreate