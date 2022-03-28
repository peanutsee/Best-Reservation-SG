/* eslint-disable no-console */
import { React, useState } from 'react';
import {
  Button,
  Row,
  Col,
  Modal,
} from 'react-bootstrap';

function AcceptRejectOption() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <Row className="pt-5 block-example border border-dark rounded mb-0">
      <Col>
        <h4>
          Do you accept the proportions?
        </h4>
      </Col>
      <Col className="d-flex justify-content-end mb-3">
        <Button className="me-5" variant="success">Accept</Button>
        <Button variant="danger" onClick={handleShow}>Reject</Button>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reject Proportions?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to reject the proportions?</Modal.Body>
        <Modal.Footer>
          <Button variant="success">
            Yes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
}

export default AcceptRejectOption;
