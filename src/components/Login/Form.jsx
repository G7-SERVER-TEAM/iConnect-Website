import React from 'react'

const Form = ({value, label, type, id, style, onChange}) => {
  return (
    <div className='flex flex-col'>
        <label className='block text-[#404B69]' htmlFor={id}>{label}</label>
        <input 
          id={id}
          type={type} 
          className={style}
          value={value}
          onChange={onChange}
        >        
        </input>
    </div>
  )
}

export default Form