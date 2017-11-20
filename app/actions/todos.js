import Ember from 'ember';

const {
  run: { later },
  RSVP: { Promise }
} = Ember;

export const add = text => dispatch => dispatch({ type: 'ADD', text });
export const query = filter => dispatch => {
  dispatch({ type: 'LOADING' });
  return new Promise(resolve => {
    later(() => {
      dispatch({ type: 'QUERY', filter });
      resolve();
    }, 600);
  });
};
export const done = id => dispatch => dispatch({ type: 'DONE', id });
export const del = id => dispatch => dispatch({ type: 'DELETE', id });
