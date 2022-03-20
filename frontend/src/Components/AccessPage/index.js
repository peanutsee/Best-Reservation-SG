/* eslint-disable react/jsx-filename-extension */
import { React, useState } from 'react';
import {
  Button,
  Modal,
} from 'react-bootstrap';

function AccessPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <Modal
      show={show}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        hello
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AccessPage;
