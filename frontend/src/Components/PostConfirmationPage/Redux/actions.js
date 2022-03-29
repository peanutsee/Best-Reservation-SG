/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  RESERVATION_PIN_UPDATE_REQUEST,
  RESERVATION_PIN_UPDATE_SUCCESS,
  RESERVATION_PIN_UPDATE_ERROR,

  RESERVATION_GET_REQUEST,
  RESERVATION_GET_SUCCESS,
  RESERVATION_GET_ERROR,
} from './constants';

// eslint-disable-next-line max-len
export const updateReservationPin = (reservationID, reservation_pin) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_PIN_UPDATE_REQUEST,
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
    const { data } = await axios.put(
      `/api/reservation/update-reservation-password/reservation_id=${reservationID}`,
      {
        reservationID, reservation_pin,
      },
      config,
    );

    dispatch({
      type: RESERVATION_PIN_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESERVATION_PIN_UPDATE_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getReservation = (reservationID) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_GET_REQUEST,
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
    const { data } = await axios.get(
      `/api/reservation/get-reservation/reservation_id=${reservationID}`,
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
