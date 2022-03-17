/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  RESERVATION_CREATION_REQUEST,
  RESERVATION_CREATION_SUCCESS,
  RESERVATION_CREATION_ERROR,
} from './constants';

// eslint-disable-next-line max-len
export const createReservation = (restaurantID, reservationTime, reservationPax) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_CREATION_REQUEST,
    });

    // to retrieve information from the store
    const {
      userLoginReducer: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      '/api/resevation/create-reservation/',
      {
        restaurantID, reservationTime, reservationPax,
      },
      config,
    );

    dispatch({
      type: RESERVATION_CREATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESERVATION_CREATION_ERROR,
      payload:
                    error.response && error.response.data.detail
                      ? error.response.data.detail
                      : error.message,
    });
  }
};