/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
import { Table } from 'react-bootstrap';

function ProportionTable(props) {
  const { proportion } = props;
  console.log(proportion);
  return (
    <>
      <h2 className="pt-5">
        @
        {proportion.telegram_handle}
        &apos;s Proportions
      </h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Item</th>
            <th>Unit Price</th>
            <th>Portions</th>
          </tr>
        </thead>
        <tbody>
          {proportion.proportions.map((pp) => (
            <tr>
              <td>{pp.item.menu_item_name}</td>
              <td>{pp.item.menu_item_price}</td>
              <td>{pp.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ProportionTable;
