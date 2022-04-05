/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { React } from 'react';
import {
  Modal, Form, Button,
} from 'react-bootstrap';

// https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard

function LinkPopUpModal(props) {
  const { reservation } = props;
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
            <Form.Control readOnly defaultValue={reservation.reservation_pin} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          navigator.clipboard.writeText(`URL: ${reservation.reservation_url}\nReservation ID: ${reservation.id}\nPassword: ${reservation.reservation_pin}\n${reservation.reservation_owner} is inviting you to join them at ${reservation.reservation_restaurant} on ${reservation.reservation_date} at ${reservation.reservation_time}`);
        }}
        >
          Copy Link
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LinkPopUpModal;
