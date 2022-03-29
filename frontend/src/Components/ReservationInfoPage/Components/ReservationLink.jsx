/* eslint-disable react/jsx-props-no-spreading */
import { React } from 'react';
import {
  Modal, Button,
} from 'react-bootstrap';

function LinkPopUpModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Reservation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>hello</p>
      </Modal.Body>
      <Modal.Footer>
        <Button>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LinkPopUpModal;
