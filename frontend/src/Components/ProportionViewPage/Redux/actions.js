/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from 'axios';
import {
  GET_PROPORTIONS_REQUEST,
  GET_PROPORTIONS_SUCCESS,
  GET_PROPORTIONS_ERROR,
  SPLIT_PROPORTIONS_REQUEST,
  SPLIT_PROPORTIONS_SUCCESS,
  SPLIT_PROPORTIONS_ERROR,
} from './constants';

export const getProportions = (bill_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PROPORTIONS_REQUEST,
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

    const { data } = await axios.get(
      `http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/payment/get-proportions/bill_id=${bill_id}/`,
      config,
    );

    dispatch({
      type: GET_PROPORTIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROPORTIONS_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const splitProportions = (bill_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SPLIT_PROPORTIONS_REQUEST,
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

    const { data } = await axios.get(
      `http://ec2-18-141-208-218.ap-southeast-1.compute.amazonaws.com:9090/api/payment/split-bill-to-users/bill_id=${bill_id}/`,
      config,
    );

    dispatch({
      type: SPLIT_PROPORTIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SPLIT_PROPORTIONS_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
