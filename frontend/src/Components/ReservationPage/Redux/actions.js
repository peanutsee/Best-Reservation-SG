/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  RESERVATION_GET_ALL_ACTIVE_REQUEST,
  RESERVATION_GET_ALL_ACTIVE_SUCCESS,
  RESERVATION_GET_ALL_ACTIVE_ERROR,

  RESERVATION_GET_ALL_COMPLETED_REQUEST,
  RESERVATION_GET_ALL_COMPLETED_SUCCESS,
  RESERVATION_GET_ALL_COMPLETED_ERROR,

  RESERVATION_DELETE_REQUEST,
  RESERVATION_DELETE_SUCCESS,
  RESERVATION_DELETE_ERROR,

  RESERVATION_JOIN_REQUEST,
  RESERVATION_JOIN_SUCCESS,
  RESERVATION_JOIN_ERROR,

  RESERVATION_REMOVE_REQUEST,
  RESERVATION_REMOVE_SUCCESS,
  RESERVATION_REMOVE_ERROR,

} from './constants';

export const getAllActive = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_GET_ALL_ACTIVE_REQUEST,
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
      type: RESERVATION_GET_ALL_ACTIVE_SUCCESS,
      payload: data,
    });
    localStorage.setItem('activeOrders', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: RESERVATION_GET_ALL_ACTIVE_ERROR,
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
      type: RESERVATION_GET_ALL_COMPLETED_REQUEST,
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
      type: RESERVATION_GET_ALL_COMPLETED_SUCCESS,
      payload: data,
    });
    localStorage.setItem('completedOrders', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: RESERVATION_GET_ALL_COMPLETED_ERROR,
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

export const removeReservation = (reservationID) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESERVATION_REMOVE_REQUEST,
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
      '/api/resevation/remove-reservation/',
      {
        reservationID,
      },
      config,
    );

    dispatch({
      type: RESERVATION_REMOVE_SUCCESS,
      payload: data,
    });
    // after delete need to do this?
    localStorage.setItem('activeOrders', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: RESERVATION_REMOVE_ERROR,
      payload:
                      error.response && error.response.data.detail
                        ? error.response.data.detail
                        : error.message,
    });
  }
};
