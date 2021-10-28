//import React, { useState } from "react";
const Input = ({label, onChange, placeholder})=> {

  return(
    <>
    <label>{label}</label>
    <input
      onChange={onChange}
      placeholder={placeholder}
      maxLength="255"
      className="p-2 rounded border"/>
    </>
  )
}

export default Input