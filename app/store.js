import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const store = createStore(rootReducer, middleware);

export default store;
