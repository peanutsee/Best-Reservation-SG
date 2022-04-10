/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Table } from 'react-bootstrap';
import OrderItem from './OrderItem';

function OrderItemList(props) {
  const { pre_order_details } = props;
  const { order_items } = pre_order_details;

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {order_items && order_items.map((item) => (
          <OrderItem item={item} order_id={pre_order_details.id} />
        ))}
      </tbody>
    </Table>
  );
}

export default OrderItemList;
