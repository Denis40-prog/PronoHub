import './App.css';
import React, { useState } from 'react';
import Header from './components/molecules/header/Header';
import Table from './components/molecules/table/Table';


function App() {
  const title = "PronoHub";
  const [activePage, setActivePage] = useState(null)

  return (
    <div className="App">
      <Header setAppActivePage={setActivePage}/>
      {/* <header className="App-header" /> */}
      <body>
        {activePage}
      </body>
    </div>
  );
}

export default App;
