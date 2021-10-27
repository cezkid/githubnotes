import React, { useState } from "react";
import Input from "./elements/Input";
import Button from "./elements/Button";

const NotepadTitle = ()=> {

  return(
    <form>
      <Input label="Notepad Title" placeholder="My notepad title..."/>
    </form>
  )
}

export default NotepadTitle