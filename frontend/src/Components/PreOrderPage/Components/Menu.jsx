/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { getMenuDetails } from '../Redux/actions';
import MenuItem from './MenuItem';

function Menu(props) {
  const { restaurant_id } = props;
  const dispatch = useDispatch();
  const params = useParams();

  const [orders, setOrders] = useState([]);

  const menu = useSelector((state) => state.retrieveMenuReducer);
  const { loading, error, menu_data } = menu;

  useEffect(() => {
    dispatch(getMenuDetails(restaurant_id));
  }, [restaurant_id]);

  return (
    <div className="shadow shadow-100 rounded p-4 mb-4 mt-2">
      <h3 className="mb-4">Restaurant Menu</h3>
      {menu_data && menu_data.map((item) => <MenuItem menu_item={item} order_id={params.id} />)}
    </div>
  );
}

export default Menu;
