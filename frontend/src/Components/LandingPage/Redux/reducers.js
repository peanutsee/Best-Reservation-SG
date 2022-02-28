/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */
import {
  RETRIEVE_RESTAURANTS_REQUEST,
  RETRIEVE_RESTAURANTS_SUCCESS,
  RETRIEVE_RESTAURANTS_ERROR,
  RETRIEVE_RESTAURANTS_RESET,
} from './constants';

export const retrieveRestaurantReducer = (
  state = { restaurants: [] },
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_RESTAURANTS_REQUEST:
      return { loading: true };
    case RETRIEVE_RESTAURANTS_SUCCESS:
      return { loading: false, success: true, restaurants: payload };
    case RETRIEVE_RESTAURANTS_ERROR:
      return { loading: false, success: false, error: payload };
    case RETRIEVE_RESTAURANTS_RESET:
      return { restaurants: [] };
    default:
      return state;
  }
};
