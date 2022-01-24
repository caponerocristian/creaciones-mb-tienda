import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    // <div className="App">
    //   <NavBar/>
    //   <header className="App-header">
    //     <ItemListContainer greeting={'Creaciones MB'}/>
    //   </header>
    // </div>
    <>
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <header className="App-header">
        <Switch>
          <Route exact path={"/"}>
            <ItemListContainer greeting={'Creaciones MB'}/>
          </Route>
          <Route path={"/item/:itemId"}>
            <ItemDetailContainer/>
          </Route>
        </Switch>
        </header>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
