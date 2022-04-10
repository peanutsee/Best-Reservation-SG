/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import {
  RESERVATION_CREATION_REQUEST,
  RESERVATION_CREATION_SUCCESS,
  RESERVATION_CREATION_ERROR,
} from './constants';

export const createReservationReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_CREATION_REQUEST:
      return { loading: true, success: false };
    case RESERVATION_CREATION_SUCCESS:
      return { loading: false, success: true, reservation: payload };
    case RESERVATION_CREATION_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};
