import React, { useState } from "react";
import Input from "./elements/Input";
import Button from "./elements/Button";

const NotepadTitle = ()=> {

  return(
    <form>
      <Input/>
      <Button>Add</Button>
    </form>
  )
}

export default NotepadTitle