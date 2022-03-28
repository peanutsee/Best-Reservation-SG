import React from "react";
import { Table } from "react-bootstrap";
import OrderItem from './OrderItem';

function OrderItemList() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {}
      </tbody>
    </Table>
  );
}

export default OrderItemList;
