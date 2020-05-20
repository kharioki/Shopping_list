import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemContextProvider from './contexts/ItemContext';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ItemContextProvider>
        <ShoppingList />
      </ItemContextProvider>
    </div>
  );
}

export default App;
