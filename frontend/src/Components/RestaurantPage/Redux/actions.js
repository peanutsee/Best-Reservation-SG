import axios from 'axios';
import {
  RESERTAURANT_GET_REQUEST,
  RESERTAURANT_GET_SUCCESS,
  RESERTAURANT_GET_ERROR,
} from './constants';

export const getRestaurant = (restaurantID) => async (dispatch) => {
  try {
    dispatch({
      type: RESERTAURANT_GET_REQUEST,
    });

    const { data } = await axios.get(
      `/api/restaurants/retrieve-restaurant/${restaurantID}`,
    );

    dispatch({
      type: RESERTAURANT_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESERTAURANT_GET_ERROR,
      payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
    });
  }
};

export default getRestaurant;
