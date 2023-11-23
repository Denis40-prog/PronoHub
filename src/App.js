import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/molecules/header/Header';
import {CookiesProvider, useCookies} from "react-cookie"
import FirstScreen from './components/organisms/FirstScreen/FirstScreen';
import Connexion from './components/molecules/Connexion/Connexion';
import Inscription from './components/molecules/Inscription/Inscription';
import Contact from './components/molecules/Contact/Contact';
import Accueil from './components/organisms/Accueil/Accueil';
import InfoMatch from './components/organisms/InfoMatch/InfoMatch';
import SnackBar from './components/atomes/SnackBar/SnackBar';

function App() {
  function setIsLogged() {
    if(localStorage.getItem('decodedToken') !== null){
      if(JSON.parse(localStorage.getItem('decodedToken')).exp > Date.now() / 1000){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  const [activePage, setActivePage] = useState(null);
  const [pageName, setPageName] = useState(setIsLogged() ? "Accueil" : "Connexion");
  const [cookies, setCookie] = useCookies(['restriction']);
  const [idMatch, setIdMatch] = useState(null);
  const [open, setOpen] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState(null);

  const openSnackBar = (msg) => {
    setSnackBarMsg(msg);
    setOpen(true);
    setTimeout(() => {
    setOpen(false);
    }, 2000);
  }

  useEffect(() => {
    selectPage();
  }, [pageName]);

  if(cookies.restriction === undefined){
    setCookie('restriction', true,)
  }

  const changePage = (name) => {
    setPageName(name);
  };

  const changeMatchId = (id) => {
    console.log(id);
    setIdMatch(id);
  }
  
   const selectPage = () => {
    switch (pageName) {
      case "Connexion":
        setActivePage(<Connexion setPage={changePage} openSnackBar={openSnackBar} loggedInSetter={setIsLogged}/>);
        break;
      case "Inscription":
        setActivePage(<Inscription setPage={changePage} openSnackBar={openSnackBar}/>);
        break;
      case "Contact":
        setActivePage(<Contact />);
        break;
      case "Accueil":
        setActivePage(<Accueil setPage={changePage}  setMatchId={changeMatchId}/>);
        break;
      case "InfosMatch":
        setActivePage(<InfoMatch setPage={changePage} matchId={idMatch} openSnackBar={openSnackBar}/>);
        break;
      default:
        setActivePage(<Connexion setPage={changePage} openSnackBar={openSnackBar} loggedInSetter={setIsLogged}/>);
        break;
    }
  }

  return (
    <CookiesProvider>
      <div className="App">
        <body className='bg-black min-h-screen pb-10'>
          {cookies.restriction ? <FirstScreen /> : <> <Header setPage={changePage} /> {activePage} </>}
        </body>
        {open ? <SnackBar msg={snackBarMsg} /> : null}
      </div>
    </CookiesProvider>
  );
}

export default App;