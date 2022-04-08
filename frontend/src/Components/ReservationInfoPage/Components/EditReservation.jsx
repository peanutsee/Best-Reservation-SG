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
  const date = new Date();
  date.setDate(date.getDate() + 2);

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
              value={reservation.reservation_date}
              min={date.toISOString().split('T')[0]}
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
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
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
