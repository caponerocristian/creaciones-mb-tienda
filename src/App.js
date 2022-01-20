import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer titulo={'Creaciones MB'}/>
      </header>
    </div>
  );
}

export default App;
