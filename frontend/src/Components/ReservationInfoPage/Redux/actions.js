/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  RESERVATION_UPDATE_REQUEST,
  RESERVATION_UPDATE_SUCCESS,
  RESERVATION_UPDATE_ERROR,

  RESERVATION_GET_REQUEST,
  RESERVATION_GET_SUCCESS,
  RESERVATION_GET_ERROR,

  RESERVATION_JOIN_REQUEST,
  RESERVATION_JOIN_SUCCESS,
  RESERVATION_JOIN_ERROR,
} from './constants';

// eslint-disable-next-line max-len
export const updateReservation = (reservationID, reservation_date_time, reservation_pax) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_UPDATE_REQUEST,
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
      `http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/reservation/update-reservation/reservation_id=${reservationID}/`,
      {
        reservationID, reservation_date_time, reservation_pax,
      },
      config,
    );

    dispatch({
      type: RESERVATION_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESERVATION_UPDATE_ERROR,
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
      `http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/reservation/get-reservation/reservation_id=${reservationID}/`,
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

export const joinReservation = (reservationID, linkPassword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_JOIN_REQUEST,
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
      `http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/reservation/join-reservation/reservation_id=${reservationID}/`,
      { linkPassword },
      config,
    );

    dispatch({
      type: RESERVATION_JOIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESERVATION_JOIN_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
