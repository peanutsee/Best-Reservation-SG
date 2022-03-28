/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { Table } from 'react-bootstrap';

function Bill(props) {
  const { bill_details } = props;
  return (
    <Table className="d-flex justify-content-end">
      <tbody>
        <tr>
          <td>Total Bill:</td>
          <td>
            $
            {bill_details.before_tax_bill}
          </td>
        </tr>
        <tr>
          <td>Add Tax:</td>
          <td>
            $
            {(bill_details.before_tax_bill * bill_details.tax).toFixed(2)}
          </td>
        </tr>
        <tr>
          <td>Minus Deposit:</td>
          <td>
            $
            {bill_details.deposit}
          </td>
        </tr>
        <tr>
          <td>Final Bill:</td>
          <td>
            $
            {bill_details.after_tax_bill}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Bill;
