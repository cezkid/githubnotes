import React, { useState } from "react";
import Button from "./elements/Button";
import Input from "./elements/Input";
import TextArea from "./elements/TextArea";

const NoteRender = ()=> {

  return(
    <div className="flex flex-wrap gap-2">
      <div className="flex flex-col gap-1">
        <Input/>
        <TextArea/>
      </div>
      <div>
        <Button variant="delete">Delete</Button>
      </div>
    </div>
  )
}

export default NoteRender