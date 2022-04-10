/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import {
  React,
} from 'react';
import {
  Modal, Button,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeReservation } from '../Redux/actions';

function RemovePopUpModal(props) {
  // Please Do not Remove this documentation
  // useStates "setRemoveModalShow and setDeleteRemove" passed in as prop from ActiveReservation
  // to be updated to false to close modal and true to refresh page(useEffect) in RTab respectively
  const { reservation, setRemoveModalShow, setDeleteRemove } = props;
  const dispatch = useDispatch();
  // https://reactjs.org/docs/handling-events.html
  // handle events such as onClick
  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeReservation(reservation.id));
    // update useState that is tracked by useEffect in ReservationTab to call API on change
    setDeleteRemove(true);
    // update useState to close modal
    setRemoveModalShow(false);
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
          <h5>
            Remove
            {' '}
            Reservation
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to LEAVE the reservation for
          {' '}
          {reservation.reservation_restaurant}
          {' '}
          reservation id
          {' '}
          {' '}
          {reservation.id}
          ?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={handleRemove}
        >
          Leave Reservation
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default RemovePopUpModal;
