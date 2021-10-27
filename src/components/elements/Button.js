import React, { useState } from "react";

const Button = ({ children, onClick, ...props })=> {

  return(
    <button>
      {children || '' }
    </button>
  )
}

export default Button