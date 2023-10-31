import './App.css';
import React, { useState } from 'react';
import Header from './components/molecules/header/Header';


function App() {
  const [activePage, setActivePage] = useState('Connexion')

  return (
    <div className="App">
      <Header setAppActivePage={setActivePage}/>
      <body className='bg-black h-screen'>
        {activePage}
      </body>
    </div>
  );
}

export default App;
