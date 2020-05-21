import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

import { ItemReducer } from '../reducers/ItemReducer';

export const ItemContext = createContext();

const initialState = [];

export default function ItemContextProvider(props) {
  // const [loading, setLoading] = useState(false);
  const [items, dispatch] = useReducer(ItemReducer, initialState);

  useEffect(() => {
    axios
      .get('/api/items')
      .then(({ data }) => dispatch({ type: 'GET_ITEMS', payload: data }))
      .catch(err => console.log(err));
  }, []);

  return (
    <ItemContext.Provider value={{ items, dispatch }}>
      {props.children}
    </ItemContext.Provider>
  );
}
