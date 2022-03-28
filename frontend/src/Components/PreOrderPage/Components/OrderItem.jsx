/* eslint-disable camelcase */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import './app.css';
import { useDispatch } from 'react-redux';
import { removeItem } from '../Redux/actions';

function OrderItem(props) {
  const { item, order_id } = props;
  const dispatch = useDispatch();

  const removeItemHandler = (order_item_id) => {
    dispatch(removeItem(order_item_id, order_id));
  };

  return (
    <tr>
      <td>{item.menu_item_name}</td>
      <td>{item.order_item_qty}</td>
      <td>{item.menu_item_price}</td>
      <td>
        <Button
          className="transparent"
          onClick={() => removeItemHandler(item.item_order_key)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </Button>
      </td>
    </tr>
  );
}

export default OrderItem;
