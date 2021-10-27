import React, { useState } from "react";
import Button from "./elements/Button";
import Input from "./elements/Input";
import TextArea from "./elements/TextArea";

const NoteRender = ()=> {

  return(
    <div>
      <Input/>
      <TextArea/>
      <Button>Delete</Button>
    </div>
  )
}

export default NoteRender