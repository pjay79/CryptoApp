import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';

const rootReducer = combineReducers({
  crypto: CryptoReducer,
});

export default rootReducer;
