import React from 'react'

/**
 * 
 * @param { id,date,team1,team2,score } element 
 * @returns 
 */

const HistoryDisplay = ({element ,...props }) => {
  return (
    <div className='flex flex-col ' key={element.id}>
      <span style={element.isWin ?  {backgroundColor : 'rgb(22 163 74)'} : {backgroundColor : 'rgb(220 38 38)'} } className='rounded-md p-1'>
            <p className='text-black text-sm text-left'>{element.date}</p>
              <p className='text-white text-center text-base'>{element.team1} vs {element.team2} </p>
                <p className='text-black text-right text-xl'>{element.score}</p>
    </span>
            <span className='p-1'></span>
        </div>
  )
}

export default HistoryDisplay