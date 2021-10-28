import { useState } from "react";
import Button from "./elements/Button";
import Note from "./Note";

/**
 * Component return a form to create a note
 */
const NoteCreate = ({notes,setNotes})=> {

  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')

  /**
   * use reduce on the notes array to get largest id number
   */
  const lastId =  notes.reduce((max, note) => (Number(note.id) > max ? Number(note.id): max), 0);

  return(
    <form className="flex flex-col gap-2 py-3">
      <Note title={title} content={content} setTitle={setTitle} setContent={setContent}/>
      <div>
      <Button
        variant="add"
        onClick={ (e)=>{
          e.preventDefault(); 
          if(!title){
            console.log('please fill note title')
          }
          else if (!content){
            console.log('please fill note')
          }
          else{
          setNotes([...notes,{title:title,content:content,id:lastId + 1}]);
          setTitle('');
          setContent('');
          }
          }
        }
        >Add</Button>
      </div>
    </form>
  )
}

export default NoteCreate