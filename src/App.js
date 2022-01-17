import './App.css';
import React, {useEffect} from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  useEffect(() => {
    console.log('Se monto el componente');
      return () =>{
        console.log('Desmonto el componente');
      }
  }, []);
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
