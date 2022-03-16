/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  RESERVATION_GETALLACTIVE_REQUEST,
  RESERVATION_GETALLACTIVE_SUCCESS,
  RESERVATION_GETALLACTIVE_ERROR,

  RESERVATION_GETALLCOMPLETED_REQUEST,
  RESERVATION_GETALLCOMPLETED_SUCCESS,
  RESERVATION_GETALLCOMPLETED_ERROR,

  RESERVATION_DELETE_REQUEST,
  RESERVATION_DELETE_SUCCESS,
  RESERVATION_DELETE_ERROR,

  RESERVATION_JOIN_REQUEST,
  RESERVATION_JOIN_SUCCESS,
  RESERVATION_JOIN_ERROR,

  // other pages , create reservation
  RESERVATION_CREATION_REQUEST,
  RESERVATION_CREATION_SUCCESS,
  RESERVATION_CREATION_ERROR,
} from './constants';

export const getAllActive = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_GETALLACTIVE_REQUEST,
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
      '/api/resevation/get-all-active-restaurant/',
      config,
    );

    dispatch({
      type: RESERVATION_GETALLACTIVE_SUCCESS,
      payload: data,
    });
    localStorage.setItem('activeOrders', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: RESERVATION_GETALLACTIVE_ERROR,
      payload:
                error.response && error.response.data.detail
                  ? error.response.data.detail
                  : error.message,
    });
  }
};

export const getAllCompleted = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_GETALLCOMPLETED_REQUEST,
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
      '/api/resevation/get-all-completed-restaurant/',
      config,
    );

    dispatch({
      type: RESERVATION_GETALLCOMPLETED_SUCCESS,
      payload: data,
    });
    localStorage.setItem('completedOrders', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: RESERVATION_GETALLCOMPLETED_ERROR,
      payload:
                  error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
    });
  }
};

export const deleteReservavtion = (reservationID) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_DELETE_REQUEST,
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

    const { data } = await axios.delete(
      '/api/resevation/delete-reservation/',
      {
        reservationID,
      },
      config,
    );

    dispatch({
      type: RESERVATION_DELETE_SUCCESS,
      payload: data,
    });
    // after delete need to do this?
    localStorage.setItem('activeOrders', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: RESERVATION_DELETE_ERROR,
      payload:
                    error.response && error.response.data.detail
                      ? error.response.data.detail
                      : error.message,
    });
  }
};

export const joinReservation = (reservationID) => async (dispatch, getState) => {
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
      '/api/resevation/join-reservation/',
      {
        reservationID,
      },
      config,
    );

    dispatch({
      type: RESERVATION_JOIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('completedOrders', JSON.stringify(data));
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

// other pages , create reservation
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
