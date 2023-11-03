import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/molecules/header/Header';
import {CookiesProvider, useCookies} from "react-cookie"
import FirstScreen from './components/organisms/FirstScreen';
import Connexion from './components/molecules/Connexion/Connexion';
import Inscription from './components/molecules/Inscription/Inscription';
import Contact from './components/molecules/Contact/Contact';
import Accueil from './components/molecules/Accueil/Accueil';
import InfoMatch from './components/organisms/InfoMatch/InfoMatch';

function App() {
    const [activePage, setActivePage] = useState(null); // Initialisez activePage à null pour éviter des problèmes
    const [pageName, setPageName] = useState("Connexion");
    const [cookies, setCookie] = useCookies(['restriction']);

    useEffect(() => {
      selectPage();
    }, [pageName]);

    if(cookies.restriction === undefined){
      setCookie('restriction', true,)
    }

  const changePage = (name) => {
    setPageName(name);
  };
  
   const selectPage = () => {
    switch (pageName) {
      case "Connexion":
        setActivePage(<Connexion setPage={changePage} />);
        break;
      case "Inscription":
        setActivePage(<Inscription setPage={changePage} />);
        break;
      case "Contact":
        setActivePage(<Contact />);
        break;
      case "Accueil":
        setActivePage(<Accueil setPage={changePage} />);
        break;
      case "InfosMatch":
        setActivePage(<InfoMatch setPage={changePage} />);
        break;
      default:
        setActivePage(<Connexion setPage={changePage} />);
        break;
    }
  }

  return (
    <CookiesProvider>
      <div className="App">
        <body className='bg-black min-h-screen pb-10'>
          {cookies.restriction ? <FirstScreen /> : <> <Header setPage={changePage} /> {activePage} </>}
        </body>
      </div>
    </CookiesProvider>
  );
}

export default App;