/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  RETRIEVE_PAYMENT_REQUEST,
  RETRIEVE_PAYMENT_ERROR,
  RETRIEVE_PAYMENT_SUCCESS,

  SET_PASSWORD_REQUEST,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_ERROR,

  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
  PAYMENT_ERROR,
} from './constants';

export const retrievePayment = (order_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RETRIEVE_PAYMENT_REQUEST,
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
      `/api/payment/pay-full-bill-tabulate/order_id=${order_id}`,
      config,
    );

    dispatch({
      type: RETRIEVE_PAYMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RETRIEVE_PAYMENT_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const setPin = (order_id, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SET_PASSWORD_REQUEST,
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
      `/api/payment/update-bill-password/order_id=${order_id}/`,
      { bill_password: password },
      config,
    );

    dispatch({
      type: SET_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SET_PASSWORD_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const makePayment = (bill_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PAYMENT_REQUEST,
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
      `/api/payment/pay-full-bill-settlement/bill_id=${bill_id}/`,
      { bill_id },
      config,
    );

    dispatch({
      type: PAYMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PAYMENT_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
