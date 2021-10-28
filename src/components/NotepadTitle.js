import Input from "./elements/Input";


/**
 * This component returns a simple form to adjust the title
 *
 */
const NotepadTitle = ({title, titleFunc})=> {

  return(
    <form>
      <Input
        label="Notepad Title"
        placeholder="My notepad title..."
        value={title}
        onChange={(e)=>{ 
          titleFunc(e.target.value);
          //console.log(e.target.value)
          }
          }
        />
    </form>
  )
}

export default NotepadTitle