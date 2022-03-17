/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
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
} from './constants';

export const getAllActiveReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_GETALLACTIVE_REQUEST:
      return { loading: true, success: false };
    case RESERVATION_GETALLACTIVE_SUCCESS:
      return { loading: false, success: true, activeOrders: payload };
    case RESERVATION_GETALLACTIVE_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const getAllCompletedReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_GETALLCOMPLETED_REQUEST:
      return { loading: true, success: false };
    case RESERVATION_GETALLCOMPLETED_SUCCESS:
      return { loading: false, success: true, completedOrders: payload };
    case RESERVATION_GETALLCOMPLETED_ERROR:
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
