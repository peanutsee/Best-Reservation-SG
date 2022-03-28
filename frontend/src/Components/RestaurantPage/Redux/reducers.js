/* eslint-disable default-param-last */
import {
  RESERTAURANT_GET_REQUEST,
  RESERTAURANT_GET_SUCCESS,
  RESERTAURANT_GET_ERROR,
} from './constants';

export const getRestaurantReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case RESERTAURANT_GET_REQUEST:
      return { loading: true, success: false };
    case RESERTAURANT_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        restaurant: payload,
      };
    case RESERTAURANT_GET_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export default getRestaurantReducer;
