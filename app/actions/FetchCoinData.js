import axios from 'axios';
import apiBaseURL from '../constants/coinmarketcap';
import { FETCH_COIN_DATA, FETCH_COIN_DATA_SUCCESS, FETCH_COIN_DATA_FAIL } from './types';

const FetchCoinData = () => async (dispatch) => {
  dispatch({ type: FETCH_COIN_DATA });
  try {
    const result = await axios.get(`${apiBaseURL}/v1/ticker/?limit=10`);
    dispatch({ type: FETCH_COIN_DATA_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: FETCH_COIN_DATA_FAIL, payload: error });
  }
};

export default FetchCoinData;
