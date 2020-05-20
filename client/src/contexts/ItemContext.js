import React, { createContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ItemReducer } from '../reducers/ItemReducer';

export const ItemContext = createContext();

const initialState = [
  { id: uuidv4(), name: 'Eggs' },
  { id: uuidv4(), name: 'Milk' },
  { id: uuidv4(), name: 'Steak' },
  { id: uuidv4(), name: 'Water' }
];

export default function ItemContextProvider(props) {
  const [items, dispatch] = useReducer(ItemReducer, initialState);

  useEffect(() => {
    console.log('called');
    dispatch({ type: 'GET_ITEMS' });
  }, [items]);

  return (
    <ItemContext.Provider value={{ items, dispatch }}>
      {props.children}
    </ItemContext.Provider>
  );
}
