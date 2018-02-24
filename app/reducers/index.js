import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';
import CryptoGlobalReducer from './CryptoGlobalReducer';

const rootReducer = combineReducers({
  crypto: CryptoReducer,
  global: CryptoGlobalReducer,
});

export default rootReducer;
