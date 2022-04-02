/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuDetails } from '../Redux/actions';

function Menu(props) {
  const { restaurant_id } = props;
  const dispatch = useDispatch();

  const menu = useSelector((state) => state.retrieveMenuReducer);
  const { loading, error, menu_data } = menu;

  useEffect(() => {
    dispatch(getMenuDetails(restaurant_id));
  }, [restaurant_id]);

  return <div className="shadow shadow-100 rounded p-3 mb-4 mt-2">Menu</div>;
}

export default Menu;
