/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import {
  RESERVATION_UPDATE_REQUEST,
  RESERVATION_UPDATE_SUCCESS,
  RESERVATION_UPDATE_ERROR,

  RESERVATION_GET_REQUEST,
  RESERVATION_GET_SUCCESS,
  RESERVATION_GET_ERROR,
} from './constants';

export const updateReservationReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_UPDATE_REQUEST:
      return { loading: true, success: false };
    case RESERVATION_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case RESERVATION_UPDATE_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const getReservationReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_GET_REQUEST:
      return { loading: true, success: false };
    case RESERVATION_GET_SUCCESS:
      return { loading: false, success: true };
    case RESERVATION_GET_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};
