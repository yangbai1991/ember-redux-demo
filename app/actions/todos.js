export const add = text => dispatch => dispatch({ type: 'ADD', text });
export const query = filter => dispatch => dispatch({ type: 'QUERY', filter });
export const done = id => dispatch => dispatch({ type: 'DONE', id });
export const del = id => dispatch => dispatch({ type: 'DELETE', id });
