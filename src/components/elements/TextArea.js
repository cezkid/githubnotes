//import React, { useState } from "react";

const TextArea = ({value, placeholder, onChange, ...props })=> {
  
  return(
    <>
      <label></label>
      <textarea
        value={value}
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