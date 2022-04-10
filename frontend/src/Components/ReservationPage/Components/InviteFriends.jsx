/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { React } from 'react';
import {
  Modal, Form, Button,
} from 'react-bootstrap';

// https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard

function LinkPopUpModal(props) {
  const { reservation } = props;
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
        <Button
          onClick={() => {
            copyToClipboard(
              `URL: ${reservation.reservation_url}\nReservation ID: ${reservation.id}\nPassword: ${reservation.reservation_pin}\n${reservation.reservation_owner} is inviting you to join them at ${reservation.reservation_restaurant} on ${reservation.reservation_date} at ${reservation.reservation_time}`,
            );
          }}
        >
          Copy Link
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LinkPopUpModal;
