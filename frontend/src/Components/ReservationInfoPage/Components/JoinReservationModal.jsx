/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import {
  React, useState,
} from 'react';
import {
  Modal, Button, Form,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { joinReservation } from '../Redux/actions';

function JoinReservationPopUpModal(props) {
  const { setJoined } = props;
  const dispatch = useDispatch();
  const [reservationID, setReservationID] = useState(0);
  const [linkPassword, setLinkPassword] = useState('');

  const handleJoin = (ID, password) => {
    dispatch(joinReservation(ID, password));
    setJoined(true);
  };

  /* used to check if Form onChange  work
  useEffect(() => {
    console.log(reservationID);
    console.log(linkPassword);
  }, [reservationID, linkPassword]);
  */

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id="contained-modal-title-vcenter">
          Join Reservation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Reservation ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Reservation ID"
              onChange={(e) => setReservationID(e.target.value)}
            />
            <Form.Text className="text-muted">
              Hint: Can be found in the Reservation Text
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setLinkPassword(e.target.value)}
            />
          </Form.Group>
          <div className="text-end">
            <Button variant="primary" onClick={() => handleJoin(reservationID, linkPassword)}>
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default JoinReservationPopUpModal;
