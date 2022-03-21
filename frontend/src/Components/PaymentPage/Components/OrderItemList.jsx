/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React from 'react';
import { Table } from 'react-bootstrap';

function OrderItemList(props) {
  const { order_items } = props;
  return (
    <Table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">Items</th>
          <th scope="col">Quantity</th>
          <th scope="col">Unit Price</th>
          <th scope="col">Total Price</th>
        </tr>
      </thead>
      <tbody>
        {order_items.map((item, index) => (
          <tr key={index}>
            <td>{item.order_item_name}</td>
            <td>{item.order_item_qty}</td>
            <td>{item.order_item_price}</td>
            <td>
              $
              {' '}
              {(item.order_item_qty * item.order_item_price).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default OrderItemList;
