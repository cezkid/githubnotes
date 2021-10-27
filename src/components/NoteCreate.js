import React, { useState } from "react";
import Button from "./elements/Button";
import Input from "./elements/Input";
import TextArea from "./elements/TextArea";

const NoteCreate = ()=> {

  return(
    <form className="flex flex-col gap-1">
      <Input placeholder="Enter note title"/>
      <TextArea placeholder="Enter note..."/>
      <div>
      <Button variant="add">Add</Button>
      </div>
    </form>
  )
}

export default NoteCreate