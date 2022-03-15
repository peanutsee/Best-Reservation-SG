/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */
import {
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_ERROR,
  USER_REGISTRATION_RESET,
} from './constants';

export const userRegistrationReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTRATION_REQUEST:
      return { loading: true, success: false };
    case USER_REGISTRATION_SUCCESS:
      return { loading: false, success: true, userInfo: payload };
    case USER_REGISTRATION_ERROR:
      return { loading: false, success: false, error: payload };
    case USER_REGISTRATION_RESET:
      return {};
    default:
      return state;
  }
};
