/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */
import axios from 'axios';
import {
  RETRIEVE_RESTAURANTS_REQUEST,
  RETRIEVE_RESTAURANTS_SUCCESS,
  RETRIEVE_RESTAURANTS_ERROR,
} from './constants';

export const retrieveRestaurants = (page = '') => async (dispatch) => {
  try {
    dispatch({ type: RETRIEVE_RESTAURANTS_REQUEST });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    if (page === '') {
      const { data } = await axios.get(
        'http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/restaurants/retrieve-all-restaurants/',
        config,
      );
      dispatch({ type: RETRIEVE_RESTAURANTS_SUCCESS, payload: data });
    } else {
      const { data } = await axios.get(
        `http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/restaurants/retrieve-all-restaurants/?page=${page}/`,
        config,
      );
      dispatch({ type: RETRIEVE_RESTAURANTS_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: RETRIEVE_RESTAURANTS_ERROR,
      payload: 'Error While Loading Restaurants',
    });
  }
};
