import { useState, useEffect } from "react";
import Button from "./elements/Button";
import Note from "./Note";

const NoteCreate = ({notes,setNotes})=> {

  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')

  return(
    <form className="flex flex-col gap-1">
      <Note setTitle={setTitle} setContent={setContent}/>
      <div>
      <Button
        variant="add"
        onClick={ (e)=>{
          e.preventDefault(); 
          setNotes([...notes,{title:title,content:content}])
          }
        }
        >Add</Button>
      </div>
    </form>
  )
}

export default NoteCreate