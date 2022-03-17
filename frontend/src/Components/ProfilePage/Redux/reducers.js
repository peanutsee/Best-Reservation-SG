/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */
import {
  RETRIEVE_USER_PROFILE_REQUEST,
  RETRIEVE_USER_PROFILE_SUCCESS,
  RETRIEVE_USER_PROFILE_ERROR,
  RETRIEVE_USER_PROFILE_RESET,

  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_ERROR,
  UPDATE_USER_PROFILE_RESET,

  UPDATE_NOTIFICATION_PROFILE_REQUEST,
  UPDATE_NOTIFICATION_PROFILE_SUCCESS,
  UPDATE_NOTIFICATION_PROFILE_ERROR,
  UPDATE_NOTIFICATION_PROFILE_RESET,

  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_ERROR,
  DELETE_PROFILE_RESET,
} from './constants';

export const userProfileReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_USER_PROFILE_REQUEST:
      return { loading: true, success: false };
    case RETRIEVE_USER_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: payload };
    case RETRIEVE_USER_PROFILE_ERROR:
      return { loading: false, success: false, error: payload };
    case RETRIEVE_USER_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const notificationUpdateReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_NOTIFICATION_PROFILE_REQUEST:
      return { loading: true, success: false };
    case UPDATE_NOTIFICATION_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: payload };
    case UPDATE_NOTIFICATION_PROFILE_ERROR:
      return { loading: false, success: false, error: payload };
    case UPDATE_NOTIFICATION_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const profileUpdateReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER_PROFILE_REQUEST:
      return { loading: true, success: false };
    case UPDATE_USER_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: payload };
    case UPDATE_USER_PROFILE_ERROR:
      return { loading: false, success: false, error: payload };
    case UPDATE_USER_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const profileDeleteReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_PROFILE_REQUEST:
      return { loading: true, success: false };
    case DELETE_PROFILE_SUCCESS:
      return { loading: false, success: true };
    case DELETE_PROFILE_ERROR:
      return { loading: false, success: false, error: payload };
    case DELETE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};
