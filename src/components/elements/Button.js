import React, { useState } from "react";
var classNames = require('classnames');

const Button = ({ children, variant, onClick, ...props })=> {

  return(
    <button className={
      classNames(
      "text-white rounded px-5 py-3 leading-none",
      {
        "bg-gray-500" : !variant,
        "bg-disqo-blue" : variant === "save",
        "bg-disqo-red" : variant === "delete",
        "bg-disqo-green" : variant === "add"
      }
    )}>
      {children || '' }
    </button>
  )
}

export default Button