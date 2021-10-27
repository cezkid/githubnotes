import React, { useState } from "react";

const TextArea = ({ children, onClick, ...props })=> {
  
  return(
    <>
    <label></label>
    <textarea>
      {children || '' }
    </textarea>
    </>
  )
}

export default TextArea