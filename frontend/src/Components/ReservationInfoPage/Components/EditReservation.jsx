/* eslint-disable react/jsx-props-no-spreading */
import { React } from 'react';
import {
  Modal, Button, Form,
} from 'react-bootstrap';
import DateForm from './DateForm';
import TimeForm from './TimeForm';

function EditPopUpModal(props) {
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
        <Form>
          <Form.Label>Reservation Date</Form.Label>
          <Form.Group>
            <DateForm />
          </Form.Group>
        </Form>
        <Form>
          <Form.Label>Reservation Time</Form.Label>
          <Form.Group>
            <TimeForm />
          </Form.Group>
        </Form>
        <Form.Group>
          <Form.Label>Number of Guests</Form.Label>
          <Form.Select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditPopUpModal;
