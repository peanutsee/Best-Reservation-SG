/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */
import {
  RETRIEVE_PAYMENT_REQUEST,
  RETRIEVE_PAYMENT_ERROR,
  RETRIEVE_PAYMENT_SUCCESS,
} from './constants';

export const retrieveBillReducer = (state = {}, action) => {
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
