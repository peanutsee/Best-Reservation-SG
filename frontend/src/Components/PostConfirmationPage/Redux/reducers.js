/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import {
  RESERVATION_PIN_UPDATE_REQUEST,
  RESERVATION_PIN_UPDATE_SUCCESS,
  RESERVATION_PIN_UPDATE_ERROR,

  RESERVATION_GET_REQUEST,
  RESERVATION_GET_SUCCESS,
  RESERVATION_GET_ERROR,
} from './constants';

export const updateReservationPinReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_PIN_UPDATE_REQUEST:
      return { loading: true, success: false };
    case RESERVATION_PIN_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case RESERVATION_PIN_UPDATE_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const getConfirmedReservationReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_GET_REQUEST:
      return { loading: true, success: false };
    case RESERVATION_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        reservation: payload,
      };
    case RESERVATION_GET_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};
