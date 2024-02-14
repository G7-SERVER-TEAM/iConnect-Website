"use client";

import React from "react";

const Input = ({title, children}) => {

  return (
    <div className='w-full flex flex-col gap-1'>
      <div className="px-2 text-gray-600">{ title }</div>
      { children }
    </div>
  )
}

export default Input;