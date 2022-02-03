import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Categoria from './components/Categoria';
import Cart from './components/Cart';
import CartProvider from './contex/CartProvider';


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
      <CartProvider>
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
          <Route path={"/categoria/:categoriaId"}>
            <Categoria/>
          </Route>
          <Route path={"/cart"}>
            <Cart/>
          </Route>
        </Switch>
        </header>
      </BrowserRouter>
      </CartProvider>
      </div>
    </>
  );
}

export default App;
