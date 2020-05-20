import { v4 as uuidv4 } from 'uuid';

export const ItemReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return state;
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: uuidv4(),
          name: action.name
        }
      ];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);

    default:
      return state;
  }
};
