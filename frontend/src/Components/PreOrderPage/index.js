/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  Row, Col, Button, Modal,
} from "react-bootstrap";
// import Menu from "./Components/Menu";
// import PreOrderList from "./Components/PreOrderList";
// import UpdateItem from "./Components/UpdateItem";
// import DeleteItem from "./Components/DeleteItem";

function OrderLink(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Share Pre-Order Link with Friends!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Auto-generated Link
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>
          Close
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
      <Modal.Body>
        <p />
      </Modal.Body>
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

  return (
    <div className="p-5">
      <Row>
        <Col sm={2}>
          <h1>Order #ID</h1>
        </Col>
        <Col>
          <Button variant="dark" onClick={() => setOrderLinkModalShow(true)}>
            Share
          </Button>
          <OrderLink
            show={orderLinkModalShow}
            onHide={() => setOrderLinkModalShow(false)}
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ offset: 10 }}>
          <Button variant="dark" onClick={() => setOrderMenuModalShow(true)}>
            View Menu
          </Button>
          <OrderMenu
            show={orderMenuModalShow}
            onHide={() => setOrderMenuModalShow(false)}
          />
        </Col>
      </Row>
    </div>
  );
}

export default PreOrderPage;
