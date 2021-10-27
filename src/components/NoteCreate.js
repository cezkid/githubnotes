import React, { useState } from "react";
import Button from "./elements/Button";
import Input from "./elements/Input";
import TextArea from "./elements/TextArea";

const NoteCreate = ()=> {

  return(
    <form>
      <Input/>
      <TextArea/>
      <Button>Add</Button>
    </form>
  )
}

export default NoteCreate