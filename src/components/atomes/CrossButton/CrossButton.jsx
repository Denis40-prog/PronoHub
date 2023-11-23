import React from 'react'
import { FaX   } from "react-icons/fa6";

const CrossButton = ({ToggleHistory , ...props}) => {
  return (
    <button onClick={() => ToggleHistory()} >
        <FaX  className='text-secondary w-6 h-6 '/>
    </button>
  ) 
}

export default CrossButton