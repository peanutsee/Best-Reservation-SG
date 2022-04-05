/* eslint-disable no-console */
import { React, useState } from 'react';
import {
  Button, Row, Col, Modal,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { splitProportions } from '../Redux/actions';

function AcceptRejectOption() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  // TODO: CONNECT TO TELEGRAM BACKEND FOR SPLIT BILL

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <Row className="mt-5">
      <Col>
        <h4>Do you accept the proportions?</h4>
      </Col>
      <Col className="d-flex justify-content-end">
        <Button className="me-5" variant="success">
          Accept
        </Button>
        <Button variant="danger" onClick={handleShow}>
          Reject
        </Button>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reject Proportions?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to reject the proportions?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">Yes</Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
}

export default AcceptRejectOption;
