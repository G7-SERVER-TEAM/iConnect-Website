import React from 'react'

const Form = ({value, label, type, id, onChange}) => {
  return (
    <div className='flex flex-col'>
        <label className='block text-[#404B69]' htmlFor={id}>{label}</label>
        <input 
          id={id}
          type={type} 
          className='block border-black border-[1px] rounded-[30px] w-full px-5'
          value={value}
          onChange={onChange}
        >        
        </input>
    </div>
  )
}

export default Form