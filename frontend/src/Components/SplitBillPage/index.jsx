/* eslint-disable no-alert */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Container, Table, Button, Modal, Form,
} from 'react-bootstrap';
import QuantityChange from './Components/QuantityChange';
import { retrievePayment } from './Redux/actions';

function SplitBillPage() {
  const dispatch = useDispatch();
  const params = useParams();

  const details = useSelector((state) => state.retrieveBillReducer);
  const { loading, error, bill_details } = details;

  const [paymentComplete, setPaymentComplete] = useState(false);

  const [auth, setAuth] = useState(false);
  const [actualPin, setActualPin] = useState('');
  const [telegram, setTelegram] = useState('');

  const togglePayment = () => {
    setPaymentComplete(!paymentComplete);
  };

  useEffect(() => {
    dispatch(retrievePayment(params.id));
    if (bill_details) {
      setActualPin(bill_details.bill_pin);
    }
  }, [bill_details]);

  const handleAccess = (pin, handle) => {
    if (pin === actualPin) {
      setTelegram(handle);
      setAuth(!auth);
    } else {
      window.alert('Invalid Pin!');
    }
  };

  return (
    <Container className="py-5 my-5">
      <AuthModal show={!auth} submit={handleAccess} />
      <h1 className="text-left">
        <strong>Final Order #ID</strong>
      </h1>
      <Table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col" width="220">
              Items
            </th>
            <th scope="col" width="220">
              Price
            </th>
            <th scope="col" width="10">
              Quantity
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chicken Burger</td>
            <td>$5.00</td>
            <td>
              <QuantityChange />
            </td>
          </tr>
          <tr>
            <td>Fried Rice</td>
            <td>$4.00</td>
            <td>
              <QuantityChange />
            </td>
          </tr>
          <tr>
            <td>Ban Mian</td>
            <td>$3.00</td>
            <td>
              <QuantityChange />
            </td>
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
        <Button onClick={togglePayment}>Tap to pay</Button>
      </div>
    </Container>
  );
}

function AuthModal(props) {
  const [password, setPassword] = useState('');
  const [telegram, setTelegram] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(password, telegram);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Hmmm...</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group id="access-pasword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group id="access-telegram" className="mb-3">
            <Form.Label>Telegram Handle</Form.Label>
            <Form.Control
              type="text"
              placeholder="john_doe"
              onChange={(e) => setTelegram(e.target.value)}
            />
            <Form.Text>Telegram handle without '@'</Form.Text>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              onClick={handleSubmit}
            >
              Submit Details
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SplitBillPage;
