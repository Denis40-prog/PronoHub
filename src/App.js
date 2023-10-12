import './App.css';
import React, { useState } from 'react';
import PersonnalCard from './components/atomes/PersonnalCard/PersonnalCard';
import Informations from './components/molecules/Infomations/Informations';
import Header from './components/molecules/header/Header';
import Contact from './components/molecules/Contact/Contact';

function App() {
  const title = "PronoHub";
  const [activePage, setActivePage] = useState(null)

  const handleClick = () => {
    switch ('Informations') {
      case 'Informations':
        setActivePage(<Informations />)
        break;
      case 'Contact':
        setActivePage(<Contact />)
        break;
      default:
        setActivePage(<PersonnalCard />)
        break;
    }
  }

  return (
    <div className="App">
      <Header action={handleClick}/>
      <header className="App-header">
        <h1>{title}</h1>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
        {activePage}
      </header>
    </div>
  );
}

export default App;
