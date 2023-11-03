import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/molecules/header/Header';
import Connexion from './components/molecules/Connexion/Connexion';
import Inscription from './components/molecules/Inscription/Inscription';
import Informations from './components/molecules/Infomations/Informations'; // Assurez-vous que le chemin est correct
import Contact from './components/molecules/Contact/Contact';
import PersonnalCard from './components/atomes/PersonnalCard/PersonnalCard';

function App() {
  const [pageName, setPageName] = useState("Connexion");

  const changePage = (name) => {
    setPageName(name);
  };

  useEffect(() => {
    selectPage();
  }, [pageName]);

  const selectPage = () => {
    switch (pageName) {
      case "Connexion":
        setActivePage(<Connexion setPage={changePage} />);
        break;
      case "Inscription":
        setActivePage(<Inscription setPage={changePage} />);
        break;
      case "Informations":
        setActivePage(<Informations />);
        break;
      case "Contact":
        setActivePage(<Contact />);
        break;
      case "A_propos":
        setActivePage(<PersonnalCard />);
        break;
      default:
        setActivePage(<Connexion setPage={changePage} />);
        break;
    }
  }

  const [activePage, setActivePage] = useState(null); // Initialisez activePage à null pour éviter des problèmes

  return (
    <>
      <Header setPage={changePage} />
      <body className='bg-black min-h-screen'>
        {activePage}
      </body>
    </>
  );
}

export default App;
