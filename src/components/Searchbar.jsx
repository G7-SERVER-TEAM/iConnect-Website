import React from 'react'
import { FaSearch } from "react-icons/fa";

const Searchbar = ({placeholder}) => {
  return (
    <form className='w-[21rem] relative'>
        <div className='relative'>
            <input type='search' placeholder={placeholder} className='w-full p-2
            rounded-full bg-slate-200' />
            <button className='absolute right-2 top-1/2 -translate-y-1/2'>
                <FaSearch size={20} color='#404B69'/>
            </button>
        </div>
    </form>
  )
}

export default Searchbar