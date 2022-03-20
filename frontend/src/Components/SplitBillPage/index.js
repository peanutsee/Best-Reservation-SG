/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import { React, useState } from 'react';
import {
  Container,
  Table,
  Button,
} from 'react-bootstrap';

function SplitBillPage() {
  const [paymentComplete, setPaymentComplete] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const togglePayment = () => {
    setPaymentComplete(!paymentComplete);
  };

  return (
    <Container className="py-5 my-5">
      <h1 className="text-left">
        <strong>Final Order #ID</strong>
      </h1>
      <Table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">Items</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chicken Burger</td>
            <td>$5.00</td>
          </tr>
          <tr>
            <td>Fried Rice</td>
            <td>$4.00</td>
          </tr>
          <tr>
            <td>Ban Mian</td>
            <td>$3.00</td>
          </tr>
        </tbody>
      </Table>
      <Table className="d-flex justify-content-end">
        <tbody>
          <tr>
            <td>Total Bill:</td>
            <td>$XX.XX</td>
          </tr>
          <tr>
            <td>Add Tax:</td>
            <td>$XX.XX</td>
          </tr>
          <tr>
            <td>Final Bill:</td>
            <td>$XX.XX</td>
          </tr>
        </tbody>
      </Table>

      <div className="d-flex justify-content-end">
        <Button>
          Tap to pay
        </Button>
      </div>

    </Container>

  );
}

export default SplitBillPage;
