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

export const retrieveRestaurants = () => async (dispatch) => {
  try {
    dispatch({ type: RETRIEVE_RESTAURANTS_REQUEST });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.get(
      '/api/restaurants/retrieve-all-restaurants/',
      config,
    );

    dispatch({ type: RETRIEVE_RESTAURANTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RETRIEVE_RESTAURANTS_ERROR,
      payload: 'Error While Loading Restaurants',
    });
  }
};
