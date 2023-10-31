import './App.css';
import PersonnalCardGrid from './components/atomes/PersonnalCard/PersonnalCard';
import PersonnalCard from './components/atomes/PersonnalCard/PersonnalCard';
import Header from './components/molecules/header/Header';
import Table from './components/molecules/table/Table';


function App() {
  const title = "PronoHub";
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <h1>{title}</h1>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
      </header>
        <div>
        <PersonnalCardGrid></PersonnalCardGrid>
        </div>


<Table></Table>
    </div>
  );
}

export default App;
