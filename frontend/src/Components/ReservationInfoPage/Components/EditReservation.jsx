/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { React } from 'react';
import {
  Modal, Button, Form,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateReservation } from '../Redux/actions';

function EditPopUpModal(props) {
  const { setEditModalShow, reservation, setEdited } = props;
  const dispatch = useDispatch();
  let reservationDate = reservation.reservation_date;
  let reservationTime = reservation.reservation_time;
  let reservationPax = reservation.reservation_pax;
  let reservationDateTime = `${reservationDate} ${reservationTime}`;

  const handleDateChange = (e) => {
    reservationDate = e;
    reservationDateTime = `${reservationDate} ${reservationTime}`;
  };

  const handleTimeChange = (e) => {
    reservationTime = e;
    reservationDateTime = `${reservationDate} ${reservationTime}`;
  };

  const handlePaxChange = (e) => {
    reservationPax = e;
  };

  const handleSubmit = () => {
    dispatch(updateReservation(reservation.id, reservationDateTime, reservationPax));
    setEditModalShow(false);
    setEdited(true);
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
          Edit Reservation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>
            Reservation Date
          </Form.Label>
          <Form.Group>
            <Form.Control
              type="date"
              onChange={(e) => handleDateChange(e.target.value)}
            />
            {' '}

          </Form.Group>
        </Form>
        <Form>
          <Form.Label>
            Reservation Time

          </Form.Label>
          <Form.Group>
            <Form.Control
              type="time"
              onChange={(e) => handleTimeChange(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Form.Group>
          <Form.Label>Number of Guests</Form.Label>
          <Form.Select onChange={(e) => handlePaxChange(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleSubmit()}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditPopUpModal;
