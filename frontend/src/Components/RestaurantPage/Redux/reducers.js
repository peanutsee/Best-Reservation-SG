/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */
import {
  RESTAURANT_GET_REQUEST,
  RESTAURANT_GET_SUCCESS,
  RESTAURANT_GET_ERROR,
} from './constants';

export const getRestaurantReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case RESTAURANT_GET_REQUEST:
      return { loading: true, success: false };
    case RESTAURANT_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        restaurant: payload,
      };
    case RESTAURANT_GET_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};
