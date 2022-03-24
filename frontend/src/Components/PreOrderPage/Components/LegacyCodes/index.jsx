/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import {
  Row, Col, Button, Modal, Form, Container,
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './App.css';
import PreOrderList from "./Components/PreOrderList";
import PreOrderBill from "./Components/PreOrderBill";

function OrderLink(props) {
  const copyToClipboard = (str) => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected = document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Share with Friends!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              URL
            </Form.Label>
            <Col sm={10}>
              <Form.Control readOnly defaultValue="https://myOrder.com" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control readOnly defaultValue="P@ssw0rd" />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          // eslint-disable-next-line no-useless-concat
          copyToClipboard('My order URL: ' + 'https://myOrder.com\n'
        // eslint-disable-next-line no-useless-concat
        + 'Password: ' + 'P@ssw0rd');
        }}
        >
          Copy
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function OrderMenu(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Menu
        </Modal.Title>
      </Modal.Header>
      {/* <Modal.Body>
      </Modal.Body> */}
      <Modal.Footer>
        <Button onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function PreOrderPage() {
  const [orderLinkModalShow, setOrderLinkModalShow] = useState(false);
  const [orderMenuModalShow, setOrderMenuModalShow] = useState(false);
  const [haveOrders, setOrderExist] = useState(true);
  const toggleOrders = () => {
    setOrderExist(!haveOrders);
  };

  return (
    <Container className="py-5 my-5">
      <Row>
        <Col xs={12} md={8}>
          <Row>
            <Col sm={4}>
              <h1 className="text-left">
                <strong>Order #ID</strong>
              </h1>
            </Col>
            <Col sm={3}>
              <Button variant="dark" onClick={() => setOrderLinkModalShow(true)}>
                Share
              </Button>
              <OrderLink
                show={orderLinkModalShow}
                onHide={() => setOrderLinkModalShow(false)}
              />
            </Col>
          </Row>
          <Row id="center">
            {haveOrders === true
              ? (<PreOrderList />)
              : (
                <p>
                  <strong>No existing orders :(</strong>
                </p>
              )}
          </Row>
        </Col>
        <Col xs={6} md={4}>
          {haveOrders === true
            ? (
              <PreOrderBill />
            )
            : null}
          <Button variant="primary" onClick={() => setOrderMenuModalShow(true)} id="ButtonStyle2">
            View Menu
          </Button>
          <OrderMenu
            show={orderMenuModalShow}
            onHide={() => setOrderMenuModalShow(false)}
          />
          {haveOrders === true
            ? (
              <Link to="/payment" className="btn btn-info" id="ButtonStyle">Make Payment</Link>
            )
            : null}
        </Col>
      </Row>
    </Container>
  );
}

export default PreOrderPage;
