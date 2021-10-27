import React, { useState } from "react";

const TextArea = ({ placeholder, ...props })=> {
  
  return(
    <>
      <label></label>
      <textarea
          placeholder={placeholder}
          rows="4"
          maxLength="1000"
          className="p-2 block rounded border"
      />
    </>
  )
}

export default TextArea