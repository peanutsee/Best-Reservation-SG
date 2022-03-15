/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_ERROR,
} from './constants';
import {
  USER_LOGIN_SUCCESS,
} from '../../AuthenticationPage/Redux/constants';

export const registration = (firstName, lastName, email, password, contact) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTRATION_REQUEST,
    });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/register/',
      {
        firstName, lastName, email, password, contactNumber: contact,
      },
      config,
    );

    dispatch({
      type: USER_REGISTRATION_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTRATION_ERROR,
      payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
    });
  }
};
