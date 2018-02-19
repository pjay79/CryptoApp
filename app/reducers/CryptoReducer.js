import { FETCH_COIN_DATA, FETCH_COIN_DATA_SUCCESS, FETCH_COIN_DATA_FAIL } from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null,
};

const CryptoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COIN_DATA:
      return {
        ...state,
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null,
      };
    case FETCH_COIN_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
      };
    case FETCH_COIN_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default CryptoReducer;
