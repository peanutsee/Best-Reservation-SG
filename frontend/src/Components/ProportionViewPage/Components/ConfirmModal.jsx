/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import {
  Button,
  Modal,
} from 'react-bootstrap';

function ConfirmModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
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
  );
}

export default ConfirmModal;
