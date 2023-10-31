import './App.css';
import React, { useState } from 'react';
import Header from './components/molecules/header/Header';

function App() {
  const title = "PronoHub";
  const [activePage, setActivePage] = useState(null)

  return (
    <div className="App">
      <Header setAppActivePage={setActivePage}/>
      <header className="App-header">
        {activePage}
      </header>
      <body>
        {activePage}
      </body>
    </div>
  );
}

export default App;
