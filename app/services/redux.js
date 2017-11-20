import redux from 'redux';
import ReduxService from 'ember-redux/services/redux';
import reducers from '../reducers/index';
import enhancers from '../enhancers/index';
import thunk from 'redux-thunk';

const { createStore, applyMiddleware, compose } = redux;

const makeStoreInstance = ({reducers, enhancers}) => {
  const middleware = applyMiddleware(thunk);
  const createStoreWithMiddleware = compose(middleware, enhancers)(createStore);
  return createStoreWithMiddleware(reducers);
};

export default ReduxService.extend({
  reducers,
  enhancers,
  makeStoreInstance
});
