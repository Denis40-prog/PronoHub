import React, { useEffect, useState } from 'react'
import { getRequest } from '../../../services/ApiCallService'

const Accueil = ({ ...props}) => {
  const [tableTest, setTableTest] = useState([])

  const payload_cat = [
    {
      name : 'Rugby'
    },
    {
      name : 'Foot'
    },
    {
      name: 'Basket'
    }
  ]

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getRequest('http://localhost:8000/api/games');
        if (response.status === 200) {
          console.log('Request successful');
          response.json().then(data => {
            setTableTest(data['hydra:member']);
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
    fetchData();
  }, []);

  const handleButtonClick = (pageName, id) => {
    props.setPage(pageName);
    props.setMatchId(id);
  };

  return (
    <div>
      <div className='py-5'>
        { payload_cat.map( (cat) => {
          return(
            <div className="flex place-content-center flex-col ml-10" key={cat.name}>
              <div className="w-fit text-center mt-5 font-semibold rounded-lg disabled:opacity-25 text-sm px-5 text-white py-2.5 mr-2 mb-2 bg-accent"><p>{cat.name}</p></div>
              <div className='overflow-x-auto space-x-24 mt-8 flex-row flex text-white'>
                {
                  tableTest.filter( (match) => match.idCategory.name === cat.name).length > 0
                  ? tableTest.filter((match) => match.idCategory.name === cat.name).map((match) => {
                    return(
                      <div className='text-center w-1/3 mb-6 flex-shrink-0 cursor-pointer' onClick={() => handleButtonClick("InfosMatch", match.id)}>
                        <img src={match.banner} alt='logo_match'/>
                        <p className='mt-8'> {match.teamId1.name} VS { match.teamId2.name}</p>
                      </div>
                    )
                  })
                  : <p className='w-full text-center'> il n'y a pas de match de {cat.name} </p> 
                }
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Accueil;