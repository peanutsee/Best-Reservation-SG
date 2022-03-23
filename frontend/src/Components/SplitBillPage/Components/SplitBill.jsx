/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
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
  Container, Table, Button, Modal, Form, Alert,
} from 'react-bootstrap';
import OrderItem from './OrderItem';
import { retrievePayment, submitProportion } from '../Redux/actions';

function SplitBill() {
  const dispatch = useDispatch();
  const params = useParams();

  const details = useSelector((state) => state.retrieveBillReducer);
  const { bill_details } = details;

  const proportion = useSelector((state) => state.submitProportionReducer);
  const { success, error } = proportion;

  const [auth, setAuth] = useState(false);
  const [actualPin, setActualPin] = useState('');
  const [telegram, setTelegram] = useState('');
  const [proportions, setProportions] = useState([]);
  const [orderQty] = useState([]);

  const handlePayment = () => {
    const final_proportions = [];
    for (let i = 0; i < orderQty.length; i++) {
      const qty = orderQty[i];
      final_proportions.push(`${proportions[i].order_item_id} - ${qty}`);
    }
    dispatch(submitProportion(params.id, telegram, final_proportions));
  };

  useEffect(() => {
    if (!bill_details) {
      dispatch(retrievePayment(params.id));
    }
    if (bill_details) {
      setActualPin(bill_details.bill_pin);

      for (const [key, value] of Object.entries(bill_details.order_items)) {
        if (!proportions[key]) {
          proportions.push({
            id: key,
            order_item_id: value.id,
            quantity: 0,
            value,
          });
          orderQty.push(0);
        }
      }
      setProportions(proportions);
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
        <strong>
          Final Order #ID:
          {' '}
          {params.id}
        </strong>
      </h1>
      {success && (
      <Alert variant="success">
        Proportion submitted! Please access
        {' '}
        <a href="t.me/Best_Reservation_SG_bot">@Best_Reservation_SG_bot</a>
        {' '}
        on
        telegram if you haven&apos;t already done so!
      </Alert>
      )}

      {error && (
      <Alert variant="danger">
        Proportion already submitted! Please access
        {' '}
        <strong>@Best_Reservation_SG_bot</strong>
        {' '}
        on
        telegram if you haven&apos;t already done so!
      </Alert>
      )}
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
          {proportions.length !== 0
            && proportions.map((item) => (
              <OrderItem
                item={item}
                orderQty={orderQty}
                proportions={proportions}
                setProportions={setProportions}
              />
            ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end mb-3">
        <Button onClick={handlePayment}>Tap to Submit</Button>
      </div>
      <div className="d-flex justify-content-end">
        <p className="small">
          Reservation Owner will verify and send out PayLah! request to your
          telegram!
        </p>
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
            <Button
              type="submit"
              disabled={telegram === ''}
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

export default SplitBill;
