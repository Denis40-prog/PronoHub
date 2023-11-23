import React, { useState } from 'react'
import HistoryButton from '../../atomes/HistoryButton/HistoryButton'
import HistoryDisplay from '../../molecules/History/HistoryDisplay'
import CrossButton from '../../atomes/CrossButton/CrossButton'
import './History.css'

const History = () => {
    
    const [displayHistory , setDisplayHistory] = useState(true)

    const ToggleHistory = () => {
        setDisplayHistory(!displayHistory)
    }

    const payload_history = [
      {
        id: 1,
        date :  new Date().toLocaleDateString(),
        team1 : 'PSG',
        team2 : 'Gibraltar',
        score : '14/0', 
        isWin : true
      },
      {
        id: 3,
        date :  new Date().toLocaleDateString(),
        team1 : 'PSG',
        team2 : 'Gibraltar',
        score : '14/0', 
        isWin : true
      },
      {
        id: 4,
        date :  new Date().toLocaleDateString(),
        team1 : 'PSG',
        team2 : 'Gibraltar',
        score : '14/0', 
        isWin : true
      },
      {
        id: 2,
        date :  new Date().toLocaleDateString(),
        team1 : 'Cameroon',
        team2 : 'Senegale',
        score : '14/0', 
        isWin : false
      },
      {
        id: 5,
        date :  new Date().toLocaleDateString(),
        team1 : 'PSG',
        team2 : 'Gibraltar',
        score : '14/0', 
        isWin : true
      },
      {
        id: 1,
        date :  new Date().toLocaleDateString(),
        team1 : 'PSG',
        team2 : 'Gibraltar',
        score : '14/0', 
        isWin : true
      },
      {
        id: 5,
        date :  new Date().toLocaleDateString(),
        team1 : 'PSG',
        team2 : 'Gibraltar',
        score : '14/0', 
        isWin : true
      },
      {
        id: 5,
        date :  new Date().toLocaleDateString(),
        team1 : 'PSG',
        team2 : 'Gibraltar',
        score : '14/0', 
        isWin : true
      },
      {
        id: 5,
        date :  new Date().toLocaleDateString(),
        team1 : 'PSG',
        team2 : 'Gibraltar',
        score : '14/0', 
        isWin : true
      },
      {
        id: 5,
        date :  new Date().toLocaleDateString(),
        team1 : 'PSG',
        team2 : 'Gibraltar',
        score : '14/0', 
        isWin : true
      },
      {
        id: 5,
        date :  new Date().toLocaleDateString(),
        team1 : 'PSG',
        team2 : 'Gibraltar',
        score : '14/0', 
        isWin : true
      },
      {
        id: 5,
        date :  new Date().toLocaleDateString(),
        team1 : 'PSG',
        team2 : 'Gibraltar',
        score : '14/0', 
        isWin : true
      },
      {
        id: 5,
        date :  new Date().toLocaleDateString(),
        team1 : 'PSG',
        team2 : 'Gibraltar',
        score : '14/0', 
        isWin : true
      }

    ]

  return (
    
      displayHistory ? 
      <div className='fixed right-10 top-24 z-10'>
      <HistoryButton ToggleHistory={ToggleHistory}> </HistoryButton>
    </div> :
       <div className='z-10 right-0 fixed h-fit w-50 rounded-xl p-3 fadeIn backdrop-blur-sm'>
      <CrossButton ToggleHistory={ToggleHistory}> </CrossButton>
      
      <div className=' overflow-y-auto' style={{maxHeight : '70vh'}}>
       {
         payload_history.map( (element) => {
           return(
             <HistoryDisplay element={element} ></HistoryDisplay>
           )
         })
       }
      </div>
       </div>
  )
}

export default History