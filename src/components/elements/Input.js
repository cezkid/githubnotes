import React, { useState } from "react";

var classNames = require('classnames');

const Input = ({label, placeholder})=> {

  return(
    <>
    <label>{label}</label>
    <input
      placeholder={placeholder}
      maxLength="255"
      className="p-2 rounded border"/>
    </>
  )
}

export default Input