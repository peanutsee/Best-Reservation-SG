/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  RESERVATION_GET_REQUEST,
  RESERVATION_GET_SUCCESS,
  RESERVATION_GET_ERROR,

} from './constants';

export const retrieveAllReservations = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_GET_REQUEST,
    });

    const {
      userLoginReducer: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      '/api/reservation/get-all-reservation/',
      config,
    );

    dispatch({
      type: RESERVATION_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESERVATION_GET_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
