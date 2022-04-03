/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import {
  RESERVATION_GET_ALL_RESERVATIONS_REQUEST,
  RESERVATION_GET_ALL_RESERVATIONS_SUCCESS,
  RESERVATION_GET_ALL_RESERVATIONS_ERROR,

  RESERVATION_DELETE_REQUEST,
  RESERVATION_DELETE_SUCCESS,
  RESERVATION_DELETE_ERROR,

  RESERVATION_REMOVE_REQUEST,
  RESERVATION_REMOVE_SUCCESS,
  RESERVATION_REMOVE_ERROR,
} from './constants';

export const getAllReservationsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_GET_ALL_RESERVATIONS_REQUEST:
      return { loading: true, success: false };
    case RESERVATION_GET_ALL_RESERVATIONS_SUCCESS:
      return {
        loading: false,
        success: true,
        active_reservations: payload.active_reservations,
        completed_reservations: payload.completed_reservations,
        is_part_of_reservation: payload.is_part_of_reservation,
      };
    case RESERVATION_GET_ALL_RESERVATIONS_ERROR:
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

export const removeReservationReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_REMOVE_REQUEST:
      return { loading: true, success: false };
    case RESERVATION_REMOVE_SUCCESS:
      return { loading: false, success: true };
    case RESERVATION_REMOVE_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};
