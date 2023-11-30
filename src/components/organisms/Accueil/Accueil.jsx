import React, { useEffect, useState, Suspense } from 'react'
import History from '../Historique/History'
import { getRequest } from '../../../services/ApiCallService'
import Loader from '../../molecules/Loader/Loader'

const Accueil = ({ ...props}) => {
  const [payload_match, setPayloadMatch] = useState([])
  const [userScore, setUserScore] = useState(0)

  const payload_cat = [
    {
      name: 'Rugby'
    },
    {
      name: 'Foot'
    },
    {
      name: 'Tennis'
    },
    {
      name: 'Football Américain'
    }
  ]

  async function fetchData() {
    try {
      const baseUrlApi = process.env.REACT_APP_API_URL
      const response = await getRequest(`${baseUrlApi}/api/games`);

      if(response !== undefined) {
        if (response.status === 200) {
          response.json().then(data => {
            setPayloadMatch(data['hydra:member']);
          }, error => {
            console.error('Error parsing JSON:', error);
          });
        } else {
          console.error(`Request failed: ${response.status}`, response);
        }
        } else {
          console.error('Request failed', response);
          props.openSnackBar('Une erreur est survenue lors de l\'enregistrement du pari');
        }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function fetchScore() {
    try {
      const baseUrlApi = process.env.REACT_APP_API_URL
        const response = await getRequest(`${baseUrlApi}/score/${localStorage.getItem('usersId')}`);
        if (response.status === 200) {
            console.log('Request successful');
            response.json().then(data => {
                setUserScore(data.score);
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
    fetchScore();
  }, []);

  const handleButtonClick = (pageName, id) => {
    props.setPage(pageName);
    props.setMatchId(id);
  };

  return (
    <Suspense fallback={<Loader />} >
      <History openSnackBar={props.openSnackBar}/>
        <div>
          <div className='py-5'>
            <p className='text-white text-2xl fixed top-22 right-0 z-10 px-5 text-right mr-16 mt-2'>Votre score: <span className='text-accent'>{userScore}</span></p>
            { payload_cat.map((cat) => {
              return(
                <div className="flex place-content-center flex-col" key={cat.id}>
                  <div className="ml-10 w-fit text-center mt-5 font-semibold rounded-lg disabled:opacity-25 text-sm px-5 text-white py-2.5 mr-2 mb-2 bg-accent"><p>{cat.name}</p></div>
                  <div className='overflow-x-scroll space-x-24 pt-8 flex-row flex text-white'>
                    {
                      payload_match.filter( (match) => match.idCategory.name === cat.name).length > 0
                      ? payload_match.filter((match) => match.idCategory.name === cat.name).map((match) => {
                        return(
                          <div className='text-center w-1/3 mb-6 flex-shrink-0 cursor-pointer drop-shadow-banner pl-5' onClick={() => handleButtonClick("InfosMatch", match.id)}>
                            <img src={match.banner} alt='Match banner'/> 
                            <p className='mt-8'> {match.teamId1.name} <span className='text-accent'>VS</span> { match.teamId2.name}</p>
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
    </Suspense>
  )
}

export default Accueil;