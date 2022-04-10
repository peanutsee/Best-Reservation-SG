/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { React, useState } from 'react';
import {
  Modal, Form, Button,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateReservationPin } from '../Redux/actions';

// https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard

function EditLinkPopUpModal(props) {
  const {
    reservation, setEditLinkModal, setPasswordChange,
  } = props;
  const dispatch = useDispatch();
  const [pin, setPin] = useState('');

  const handlePasswordChange = (e) => {
    e.preventDefault();
    dispatch(updateReservationPin(reservation.id, pin));
    /* Close Edit Link, refresh page/call Api to get updated pw */
    setEditLinkModal(false);
    setPasswordChange(true);
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Reservation Link
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group classname="mb-3">
            <Form.Label> Reservation Link </Form.Label>
            <Form.Control readOnly defaultValue={reservation.reservation_url} />
          </Form.Group>
          <Form.Group classname="mb-3">
            <Form.Label> Password </Form.Label>
            <Form.Control placeholder="Password" onChange={(e) => setPin(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handlePasswordChange}>
          Update Password
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditLinkPopUpModal;
