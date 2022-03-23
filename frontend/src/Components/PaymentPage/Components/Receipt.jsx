/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Row, Col, Image, Table,
} from 'react-bootstrap';

function Receipt(props) {
  const { bill_details } = props;

  return (
    <Row>
      {bill_details.bill_is_paid === true ? (
        <Col md={{ span: 4, offset: 2 }}>
          <Image fluid className="w-70" src="/static/assets/paid.png" />
        </Col>
      ) : null}
      <Col>
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
      </Col>
    </Row>
  );
}

export default Receipt;
