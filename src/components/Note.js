import Input from "./elements/Input";
import TextArea from "./elements/TextArea";

/**
 * Note component holds fields for title and note
 */
const Note = ({title, content, setTitle, setContent})=> {
  return (
    <>
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
    </>
  )

}

export default Note