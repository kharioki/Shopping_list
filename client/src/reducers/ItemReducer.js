// import { v4 as uuidv4 } from 'uuid';

export const ItemReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return action.payload;
    case 'ADD_ITEM':
      return [action.payload, ...state];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);

    default:
      return state;
  }
};
