/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Container, Table, Button, Modal, Form,
} from 'react-bootstrap';
import OrderItem from './OrderItem';
import { retrievePayment } from '../Redux/actions';

function SplitBill() {
  const dispatch = useDispatch();
  const params = useParams();

  const details = useSelector((state) => state.retrieveBillReducer);
  const { bill_details } = details;

  const [auth, setAuth] = useState(false);
  const [actualPin, setActualPin] = useState('');
  const [telegram, setTelegram] = useState('');
  const [proportion, setProportion] = useState({});

  const handlePayment = () => {
    // TODO: SUBMIT PROPORTIONS FOR VETTING
    console.log(telegram);
  };

  useEffect(() => {
    if (!bill_details) {
      dispatch(retrievePayment(params.id));
    }
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
              Unit Price
            </th>
            <th scope="col" width="10">
              Portions
            </th>
          </tr>
        </thead>
        <tbody>
          {bill_details
            && bill_details.order_items.map((item, key) => (
              <OrderItem key={key} item={item} proportion={proportion} setProportion={setProportion} />
            ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end mb-3">
        <Button onClick={handlePayment}>Tap to Submit</Button>
      </div>
      <div className="d-flex justify-content-end">
        <p className="small">Reservation Owner will verify and send out PayLah! request to your telegram!</p>
      </div>
    </Container>
  );
}

function AuthModal(props) {
  const [password, setPassword] = useState('');
  const [telegram, setTelegram] = useState('');
  const { submit } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(password, telegram);
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
            <Form.Text>Telegram handle without &apos;@&apos;</Form.Text>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button type="submit" onClick={handleSubmit}>
              Submit Details
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SplitBill;
