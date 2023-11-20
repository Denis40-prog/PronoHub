import React, { useEffect } from 'react'
import banner from '../../../assets/images/Bannieres/louasm.jpeg'

const Accueil = ({ ...props}) => {

  const payload_all_match = [
    {
      id : 1,
    teamName1 : "LOU",
    teamName2 : "ASM",
    banner : banner,
    cat : 'Rugby',
    _link : '/'
    },
    {
      id : 2,
    teamName1 : "LOU",
    teamName2 : "ASM",
    banner : banner,
    cat : 'Rugby',
    },
    {
      id : 3,
    teamName1 : "LOU",
    teamName2 : "ASM",
    banner : banner,
    cat : 'Rugby',
    },
    {
      id : 4,
    teamName1 : "LOU",
    teamName2 : "ASM",
    banner : banner,
    cat : 'Rugby',
    },
    {
      id : 5,
    teamName1 : "LOU",
    teamName2 : "ASM",
    banner : banner,
    cat : 'Rugby',
    },
    {
      id : 6,
    teamName1 : "LOU",
    teamName2 : "ASM",
    banner : banner,
    cat : 'Rugby',
    }
  ]


  const payload_cat = [
    
      {
        id : 1,
        name : 'Rugby'
      },
      {
        id : 2,
        name : 'Foot'
    }
  ]

  useEffect( () => {
    
  }, [])

  const handleButtonClick = (pageName) => {
    props.setPage(pageName);
};

  return (
    <div>
      <div className='py-5'>
        { payload_cat.map( (cat) => {
                  
                  console.log(payload_all_match.filter( (match) => match.cat === cat.name).length > 0)
          return(
            <div className="flex place-content-center flex-col ml-10" key={cat.name}>
              <div className="w-fit text-center mt-5 font-semibold rounded-lg disabled:opacity-25 text-sm px-5 text-white py-2.5 mr-2 mb-2 bg-accent"><p>{cat.name}</p></div>
              <div className='overflow-x-auto space-x-24 mt-8 flex-row flex text-white'>
                {
                  payload_all_match.filter( (match) => match.cat === cat.name).length > 0
                  ? payload_all_match.filter((match) => match.cat === cat.name).map((match) => {
                    return(
                      <div className='text-center w-1/3 mb-6 flex-shrink-0 cursor-pointer' onClick={() => handleButtonClick("InfosMatch")}>
                        <img src={match.banner}/> 
                        <p className='mt-8'> {match.teamName1} VS { match.teamName2}</p>
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