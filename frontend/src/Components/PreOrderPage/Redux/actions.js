/* eslint-disable camelcase */
import axios from 'axios';
import {
  RETRIEVE_PRE_ORDER_ITEMS_REQUEST,
  RETRIEVE_PRE_ORDER_ITEMS_SUCCESS,
  RETRIEVE_PRE_ORDER_ITEMS_ERROR,
  REMOVE_PRE_ORDER_ITEM_REQUEST,
  REMOVE_PRE_ORDER_ITEM_SUCCESS,
  REMOVE_PRE_ORDER_ITEM_ERROR,
  ADD_PRE_ORDER_ITEM_REQUEST,
  ADD_PRE_ORDER_ITEM_SUCCESS,
  ADD_PRE_ORDER_ITEM_ERROR,
  RETRIEVE_MENU_REQUEST,
  RETRIEVE_MENU_SUCCESS,
  RETRIEVE_MENU_ERROR,
  UPDATE_PRE_ORDER_ITEM_REQUEST,
  UPDATE_PRE_ORDER_ITEM_SUCCESS,
  UPDATE_PRE_ORDER_ITEM_ERROR,
} from './constants';

export const getPreOrderDetails = (order_id) => async (dispatch, getState) => {
  try {
    dispatch({ type: RETRIEVE_PRE_ORDER_ITEMS_REQUEST });

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
      `/api/payment/list-order-items/order_id==${order_id}/`,
      config,
    );

    dispatch({ type: RETRIEVE_PRE_ORDER_ITEMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RETRIEVE_PRE_ORDER_ITEMS_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const addItem = (order_id, item_id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_PRE_ORDER_ITEM_REQUEST });

    const {
      userLoginReducer: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/payment/add-item-to-order/order_id=${order_id}/item_id=${item_id}/`,
      config,
    );

    dispatch({ type: ADD_PRE_ORDER_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_PRE_ORDER_ITEM_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const removeItem = (order_item_id) => async (dispatch, getState) => {
  try {
    dispatch({ type: REMOVE_PRE_ORDER_ITEM_REQUEST });

    const {
      userLoginReducer: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `/api/payment/delete-order-items/item_order_key=${order_item_id}/`,
      config,
    );

    dispatch({ type: REMOVE_PRE_ORDER_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REMOVE_PRE_ORDER_ITEM_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateItem = (order_item_id) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_PRE_ORDER_ITEM_REQUEST });

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
      `/api/payment/update-order-items-qty/item_order_key=${order_item_id}/`,
      config,
    );

    dispatch({ type: UPDATE_PRE_ORDER_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_PRE_ORDER_ITEM_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getMenuDetails = (restaurant_id) => async (dispatch, getState) => {
  try {
    dispatch({ type: RETRIEVE_MENU_REQUEST });

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
      `/api/payment/retrieve-menu-items/restaurant_id=${restaurant_id}/`,
      config,
    );

    dispatch({ type: RETRIEVE_MENU_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RETRIEVE_MENU_ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
