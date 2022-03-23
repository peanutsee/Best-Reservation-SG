/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  RETRIEVE_PAYMENT_REQUEST,
  RETRIEVE_PAYMENT_ERROR,
  RETRIEVE_PAYMENT_SUCCESS,

  SUBMIT_PROPORTION_REQUEST,
  SUBMIT_PROPORTION_SUCCESS,
  SUBMIT_PROPORTION_ERROR,
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
      `/api/payment/pay-full-bill-tabulate/order_id=${order_id}/`,
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

export const submitProportion = (order_id, telegram_handle, proportions) => async (dispatch) => {
  try {
    dispatch({
      type: SUBMIT_PROPORTION_REQUEST,
    });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `/api/payment/add-proportions/order_id=${order_id}/`,
      { telegram_handle, proportions },
      config,
    );

    dispatch({
      type: SUBMIT_PROPORTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUBMIT_PROPORTION_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
