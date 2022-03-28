/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Table,
} from "react-bootstrap";

function PreOrderBill() {
  return (
    <div>
      <p className="text-right">
        <strong>Bill #ID</strong>
      </p>
      <Table id="Table2">
        <tbody id="Table2">
          <tr>
            <td id="Table2">Total:</td>
            <td>$XX.XX</td>
          </tr>
          <tr>
            <td id="Table2">GST:</td>
            <td>$XX.XX</td>
          </tr>
          <tr>
            <td id="Table2">Final:</td>
            <td>$XX.XX</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PreOrderBill;
