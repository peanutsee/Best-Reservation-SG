/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Modal, Button,
} from 'react-bootstrap';

function RemovePopUpModal(props) {
  const { reservation } = props;
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>
          Modal title.
          {' '}
          {reservation.reservation_id}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default RemovePopUpModal;
