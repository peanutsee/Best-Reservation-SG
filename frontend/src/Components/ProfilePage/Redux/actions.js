/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import axios from 'axios';
import {
  RETRIEVE_USER_PROFILE_REQUEST,
  RETRIEVE_USER_PROFILE_SUCCESS,
  RETRIEVE_USER_PROFILE_ERROR,

  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_ERROR,

  UPDATE_NOTIFICATION_PROFILE_REQUEST,
  UPDATE_NOTIFICATION_PROFILE_SUCCESS,
  UPDATE_NOTIFICATION_PROFILE_ERROR,

  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_ERROR,
} from './constants';

import { USER_LOGOUT, USER_LOGIN_SUCCESS } from '../../AuthenticationPage/Redux/constants';

export const retrieveUserProfile = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: RETRIEVE_USER_PROFILE_REQUEST,
    });

    const {
      userLoginReducer: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/profile/retrieve-profile/', config);

    dispatch({
      type: RETRIEVE_USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RETRIEVE_USER_PROFILE_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateProfile = (first_name, last_name, email, password, contact_number) => async (dispatch, getState) => {
  console.log(`${first_name} ${last_name} ${email}`);
  try {
    dispatch({
      type: UPDATE_USER_PROFILE_REQUEST,
    });

    const {
      userLoginReducer: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      'http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/profile/update-profile/',
      {
        first_name,
        last_name,
        email,
        password,
        contact_number,
        sms_notification: '',
        email_notification: '',
      },
      config,
    );

    dispatch({
      type: UPDATE_USER_PROFILE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    dispatch({ type: RETRIEVE_USER_PROFILE_SUCCESS });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UPDATE_USER_PROFILE_ERROR,
      payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
    });
  }
};

export const updateNotifications = (sms_notification, email_notification) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_NOTIFICATION_PROFILE_REQUEST,
    });

    const {
      userLoginReducer: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      'http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/profile/update-profile/',
      {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        contact_number: '',
        sms_notification,
        email_notification,
      },
      config,
    );

    dispatch({
      type: UPDATE_NOTIFICATION_PROFILE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UPDATE_NOTIFICATION_PROFILE_ERROR,
      payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
    });
  }
};

export const deleteProfile = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_PROFILE_REQUEST,
    });

    const {
      userLoginReducer: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete('http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/profile/delete-profile/', config);

    dispatch({
      type: USER_LOGOUT,
    });
    localStorage.removeItem('userInfo');
  } catch (error) {
    dispatch({
      type: DELETE_PROFILE_ERROR,
      payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
    });
  }
};
