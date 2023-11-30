import React from 'react'

/**
 * 
 * @param { id,date,team1,team2,score } element 
 * @returns 
 */

const HistoryDisplay = ({element }) => {
  return (
    <div className='flex flex-col ' key={element.id}>
      <span style={element.status === "valid" ?  {backgroundColor: 'rgb(22 163 74)'} : element.status === "pending" ? {backgroundColor: "orange"} : {backgroundColor: 'rgb(220 38 38)'}} className='rounded-md p-1'>
        <p className='text-white text-center text-2xl'>{element.nomTeam1} vs {element.nomTeam2} </p>
        <p className='text-black text-right text-sm'>{element.score1} - {element.score2}</p>
      </span>
      <span className='p-1'></span>
    </div>
  )
}

export default HistoryDisplay