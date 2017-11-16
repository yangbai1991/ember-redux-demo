import Ember from 'ember';

const { set } = Ember;

const initialState = {
  filter: '',
  items: []
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, { items: [ ...state.items, { id: new Date().getTime(), name: action.text, isDone: false } ] });
    case 'QUERY':{
      return Object.assign({}, state, { filter: action.filter });
    }
    case 'DONE': {
      const items = state.items.map(item => {
        if (item.id === action.id) {
          set(item, 'isDone', !item.isDone);
        }
        return item;
      });
      return Object.assign({}, state, { items });
    }
    case 'DELETE': {
      const items = state.items.filter(item => item.id !== action.id);
      return Object.assign({}, state, { items });
    }
    default:
      return state;
  }
}
