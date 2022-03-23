/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */
import {
  RESERVATION_GET_REQUEST,
  RESERVATION_GET_SUCCESS,
  RESERVATION_GET_ERROR,
} from './constants';

export const retrieveReservationsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_GET_REQUEST:
      return { loading: true, success: false };
    case RESERVATION_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        active_reservations: payload.active_reservations,
        completed_reservations: payload.completed_reservations,
      };
    case RESERVATION_GET_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};
