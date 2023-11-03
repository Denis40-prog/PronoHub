import './App.css';
import React, { useState } from 'react';
import Header from './components/molecules/header/Header';
import {CookiesProvider, useCookies} from "react-cookie"
import FirstScreen from './components/organisms/FirstScreen';


function App() {
  const [activePage, setActivePage] = useState('Connexion')
  const [cookies, setCookie] = useCookies(['restriction']);

  if(cookies.restriction === undefined){
    setCookie('restriction', true,)
  }

  return (
    <CookiesProvider>

    <div className="App">
  <body className='bg-black h-screen'>

      {cookies.restriction ? 
        
      <FirstScreen>
       </FirstScreen>
       :
       <>
  <Header setAppActivePage={setActivePage}/>
    {activePage}
  </> 
}
</body>

    </div>

    </CookiesProvider>
  );
}

export default App;
