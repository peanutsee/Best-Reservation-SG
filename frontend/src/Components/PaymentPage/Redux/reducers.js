/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */
import {
  RETRIEVE_PAYMENT_REQUEST,
  RETRIEVE_PAYMENT_ERROR,
  RETRIEVE_PAYMENT_SUCCESS,
  SET_PASSWORD_REQUEST,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_ERROR,
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
  PAYMENT_ERROR,
  SET_RESERVATION_COMPLETE_REQUEST,
  SET_RESERVATION_COMPLETE_SUCCESS,
  SET_RESERVATION_COMPLETE_ERROR,
} from './constants';

export const retrievePaymentReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_PAYMENT_REQUEST:
      return { loading: true, success: false };
    case RETRIEVE_PAYMENT_SUCCESS:
      return { loading: false, success: true, bill_details: payload };
    case RETRIEVE_PAYMENT_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const setPasswordReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PASSWORD_REQUEST:
      return { loading: true, success: false };
    case SET_PASSWORD_SUCCESS:
      return { loading: false, success: true };
    case SET_PASSWORD_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const setReservationCompleteReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_RESERVATION_COMPLETE_REQUEST:
      return { loading: true, success: false };
    case SET_RESERVATION_COMPLETE_SUCCESS:
      return { loading: false, success: true };
    case SET_RESERVATION_COMPLETE_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const billPaymentReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case PAYMENT_REQUEST:
      return { loading: true, success: false };
    case PAYMENT_SUCCESS:
      return { loading: false, success: true };
    case PAYMENT_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};
