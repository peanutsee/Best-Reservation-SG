/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Row, Col, Image, Table, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PaymentButton from './PaymentButton';
import { makePayment } from '../Redux/actions';

function Receipt(props) {
  const { bill_details } = props;

  return (
    <Row>
      {bill_details.bill_is_paid === true ? (
        <Col md={6} className="d-flex justify-content-center align-middle">
          <Image fluid className="h-50" src="/static/assets/paid.png" />
        </Col>
      ) : null}
      <Col md={6}>
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
        <div className="d-flex justify-content-end">
          <div className="w-50 d-grid gap-2">
            {bill_details && (
              <PaymentButton
                bill_details={bill_details}
                payment={makePayment}
              />
            )}
            {bill_details.bill_is_split && (
              <Button className="btn btn-info mt-3">
                <Link to={`/proportion_view/${bill_details.id}`}>
                  Proportions
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Receipt;
