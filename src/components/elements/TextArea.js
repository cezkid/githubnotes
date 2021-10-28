//import React, { useState } from "react";

const TextArea = ({ placeholder, onChange, ...props })=> {
  
  return(
    <>
      <label></label>
      <textarea
          placeholder={placeholder}
          rows="4"
          maxLength="1000"
          className="p-2 block rounded border"
          onChange= {onChange}
      />
    </>
  )
}

export default TextArea