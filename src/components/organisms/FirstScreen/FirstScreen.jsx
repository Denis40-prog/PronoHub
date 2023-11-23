import React from 'react'
import Logo from '../../../assets/images/LogoPronoHubNoir.png'
import ButtonFirstScreen from '../../molecules/ButtonFirstSCreen/ButtonFirstScreen'
import { useCookies } from 'react-cookie';

function FirstScreen() {

    const [cookies, setCookie] = useCookies(['restriction'])

    function HandleRestriction(bool){
      if (bool === true){
        window.history.back()
        }else if ( bool === false){
            setCookie("restriction", false)
        }
    }

  return (
    <div className='flex flex-col items-center justify-center place-content-center min-h-screen'>
        <img src={Logo} alt="logo" className='w-56' />
        <h1 className='font-bold'>Avez-vous 18 ans ?</h1>
        <h2 className='text-center'>PronoHub est un site qui propose des paris sportif. <br/>
        Vous devez avoir 18 ans ou plus pour entrer.
        </h2>
        <div className='flex flex-row p-10'>
        <ButtonFirstScreen style="bg-accent" HandleRestriction={HandleRestriction} Bool={false}>
            J'ai 18 ans ou plus - Entrer
        </ButtonFirstScreen>
        <ButtonFirstScreen style="text-white bg-primary" HandleRestriction={HandleRestriction} Bool={true}>
            J'ai moins de 18 ans - Sortir
        </ButtonFirstScreen>
        </div>
    </div>
  )
}

export default FirstScreen