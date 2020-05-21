import React from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemContextProvider from './contexts/ItemContext';
import ItemModal from './components/ItemModal';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container>
        <ItemContextProvider>
          <ItemModal />
          <ShoppingList />
        </ItemContextProvider>
      </Container>
    </div>
  );
}

export default App;
