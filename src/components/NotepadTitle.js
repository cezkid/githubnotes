//import React, { useState } from "react";
import Input from "./elements/Input";

const NotepadTitle = ({title, titleFunc})=> {

  return(
    <form>
      <Input
        label="Notepad Title"
        placeholder="My notepad title..."
        value={title}
        onChange={(e)=>{ titleFunc(e.target.value); console.log(e.target.value) }}
        />
    </form>
  )
}

export default NotepadTitle