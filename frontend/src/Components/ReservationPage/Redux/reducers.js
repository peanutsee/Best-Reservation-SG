/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
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
} from './constants';

export const getAllActiveReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_GET_ALL_ACTIVE_REQUEST:
      return { loading: true, success: false };
    case RESERVATION_GET_ALL_ACTIVE_SUCCESS:
      return { loading: false, success: true, activeOrders: payload };
    case RESERVATION_GET_ALL_ACTIVE_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const getAllCompletedReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_GET_ALL_COMPLETED_REQUEST:
      return { loading: true, success: false };
    case RESERVATION_GET_ALL_COMPLETED_SUCCESS:
      return { loading: false, success: true, completedOrders: payload };
    case RESERVATION_GET_ALL_COMPLETED_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const deleteReservationReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_DELETE_REQUEST:
      return { loading: true, success: false };
    case RESERVATION_DELETE_SUCCESS:
      return { loading: false, success: true };
    case RESERVATION_DELETE_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const joinReservationReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_JOIN_REQUEST:
      return { loading: true, success: false };
    case RESERVATION_JOIN_SUCCESS:
      return { loading: false, success: true };
    case RESERVATION_JOIN_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};
