/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */
import {
  GET_PROPORTIONS_REQUEST,
  GET_PROPORTIONS_SUCCESS,
  GET_PROPORTIONS_ERROR,
  SPLIT_PROPORTIONS_REQUEST,
  SPLIT_PROPORTIONS_SUCCESS,
  SPLIT_PROPORTIONS_ERROR,
} from './constants';

export const getProportionsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROPORTIONS_REQUEST:
      return { loading: true, success: false };
    case GET_PROPORTIONS_SUCCESS:
      return { loading: false, success: true, proportions: payload };
    case GET_PROPORTIONS_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const splitBillProportionsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SPLIT_PROPORTIONS_REQUEST:
      return { loading: true, success: false };
    case SPLIT_PROPORTIONS_SUCCESS:
      return { loading: false, success: true, proportions: payload };
    case SPLIT_PROPORTIONS_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};
