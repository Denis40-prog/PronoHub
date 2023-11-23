import React from 'react'
import { FaClockRotateLeft  } from "react-icons/fa6";

const HistoryButton = ({ToggleHistory , ...props}) => {
  return (
    <button onClick={() => ToggleHistory()} >
        <FaClockRotateLeft className='text-accent w-8 h-8 hover:w-10 hover:h-10  hover:-translate-y-2 '/>
    </button>
  ) 
}

export default HistoryButton