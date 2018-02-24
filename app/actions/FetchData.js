import axios from 'axios';
import apiBaseURL from '../constants/apiBaseURL';
import {
  FETCH_COIN_DATA,
  FETCH_COIN_DATA_SUCCESS,
  FETCH_COIN_DATA_FAIL,
  FETCH_GLOBAL_DATA,
  FETCH_GLOBAL_DATA_SUCCESS,
  FETCH_GLOBAL_DATA_FAIL,
} from './types';

export const FetchCoinData = () => async (dispatch) => {
  dispatch({ type: FETCH_COIN_DATA });
  try {
    const result = await axios.get(`${apiBaseURL}/v1/ticker/?limit=10`);
    dispatch({ type: FETCH_COIN_DATA_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: FETCH_COIN_DATA_FAIL, payload: error });
  }
};

export const FetchGlobalData = () => async (dispatch) => {
  dispatch({ type: FETCH_GLOBAL_DATA });
  try {
    const result = await axios.get(`${apiBaseURL}/v1/global`);
    console.log(result);
    dispatch({ type: FETCH_GLOBAL_DATA_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: FETCH_GLOBAL_DATA_FAIL, payload: error });
  }
};
