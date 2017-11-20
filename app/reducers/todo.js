import Ember from 'ember';

const { set } = Ember;

const initialState = {
  filter: '',
  items: [],
  loading: false
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, { items: [ ...state.items, { id: new Date().getTime(), name: action.text, isDone: false } ] });
    case 'QUERY':{
      const items = [
      { id: new Date().getTime()+1, name: 'item1', isDone: false },
      { id: new Date().getTime()+2, name: 'item2', isDone: false },
      { id: new Date().getTime()+3, name: 'item3', isDone: true }
      ];
      return Object.assign({}, state, { filter: action.filter || '', items, loading: false });
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
    case 'LOADING':
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
}
