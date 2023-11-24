import React, { useEffect, useState } from 'react'
import HistoryButton from '../../atomes/HistoryButton/HistoryButton'
import HistoryDisplay from '../../molecules/History/HistoryDisplay'
import CrossButton from '../../atomes/CrossButton/CrossButton'
import { getRequest } from '../../../services/ApiCallService'
import { Tooltip } from 'react-tooltip';
import './History.css'

const History = ({...props}) => {
  const [displayHistory , setDisplayHistory] = useState(true)
  const [payload_history, setPayload_history] = useState([])

  const ToggleHistory = () => {
      setDisplayHistory(!displayHistory)
  }

  async function fetchData() {
    try {
        const response = await getRequest(`http://localhost:8000/history/${localStorage.getItem('usersId')}`);
        if (response.status === 200) {
            console.log('Request successful');
            response.json().then(data => {
                props.openSnackBar('Les informations sur le match ont bien été récupérées')
                setPayload_history(data);
            }, error => {
                console.error('Error parsing JSON:', error);
            });
        } else {
            console.error(`Request failed: ${response.status}`, response);
        }
    } catch (error) {
        console.error('Error:', error);
    }
  }

  useEffect(() => {
      fetchData();
  }, [])

  return (
      displayHistory ? 
      <div className='fixed right-10 top-24 z-10' data-tooltip-id="history" data-tooltip-content={'Voir l\'historique des paris'}>
      <Tooltip id="history"/>
        <HistoryButton ToggleHistory={ToggleHistory}/>
      </div> :
      <div className='z-10 right-0 fixed h-fit w-50 rounded-xl p-3 fadeIn backdrop-blur-sm'>
        <CrossButton ToggleHistory={ToggleHistory} />
        <div className=' overflow-y-auto' style={{maxHeight : '70vh'}}>
          {
            payload_history.map((element) => {
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