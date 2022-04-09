import axios from 'axios';
import {
  RESTAURANT_GET_REQUEST,
  RESTAURANT_GET_SUCCESS,
  RESTAURANT_GET_ERROR,
} from './constants';

export const getRestaurant = (restaurantID) => async (dispatch) => {
  try {
    dispatch({
      type: RESTAURANT_GET_REQUEST,
    });

    const { data } = await axios.get(
      `http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/restaurants/retrieve-restaurant/${restaurantID}/`,
    );

    dispatch({
      type: RESTAURANT_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESTAURANT_GET_ERROR,
      payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
    });
  }
};

export default getRestaurant;
