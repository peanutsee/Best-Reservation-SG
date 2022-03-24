/* eslint-disable default-param-last */
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

export const retrievePreOrderReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_PRE_ORDER_ITEMS_REQUEST:
      return { loading: true, success: false };
    case RETRIEVE_PRE_ORDER_ITEMS_SUCCESS:
      return { loading: false, success: true, pre_order_details: payload };
    case RETRIEVE_PRE_ORDER_ITEMS_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const removePreOrderItemReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case REMOVE_PRE_ORDER_ITEM_REQUEST:
      return { loading: true, success: false };
    case REMOVE_PRE_ORDER_ITEM_SUCCESS:
      return { loading: false, success: true, pre_order_details: payload };
    case REMOVE_PRE_ORDER_ITEM_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const addPreOrderItemReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRE_ORDER_ITEM_REQUEST:
      return { loading: true, success: false };
    case ADD_PRE_ORDER_ITEM_SUCCESS:
      return { loading: false, success: true, pre_order_details: payload };
    case ADD_PRE_ORDER_ITEM_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const updatePreOrderItemReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PRE_ORDER_ITEM_REQUEST:
      return { loading: true, success: false };
    case UPDATE_PRE_ORDER_ITEM_SUCCESS:
      return { loading: false, success: true, pre_order_details: payload };
    case UPDATE_PRE_ORDER_ITEM_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const retrieveMenuReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_MENU_REQUEST:
      return { loading: true, success: false };
    case RETRIEVE_MENU_SUCCESS:
      return { loading: false, success: true, menu: payload };
    case RETRIEVE_MENU_ERROR:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};
