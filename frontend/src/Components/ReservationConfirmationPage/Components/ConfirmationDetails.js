/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { VscQuestion } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import PaymentButton from './PaymentButton';
import { createReservation } from '../Redux/actions';

function ConfirmationDetails(props) {
  const {
    userInfo, reservationDate, reservationTime, reservationPax, nGuest, restaurantID,
  } = props;

  const createsReservation = useSelector(
    (state) => state.createReservationReducer,
  );
  const {
    reservation,
  } = createsReservation;

  const reservation_date_time = `${reservationDate} ${reservationTime}`;
  // console.log(reservation_date_time);
  // console.log(restaurantID);
  // console.log(nGuest);
  const dispatch = useDispatch();
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createReservation(restaurantID, reservation_date_time, nGuest));
    console.log(reservation.id);
    window.open(`/post_confirmation/${reservation.id}`);
  };
  return (
    <div className="p-5 shadow shadow-100 row">
      <h1 className="text-center">Confirm Reservation</h1>
      <div className="pt-5 row">
        <div className="col-sm">
          <h4>Name</h4>
          <p>{userInfo.first_name}</p>
          <h4>Reservation Date</h4>
          <p>{reservationDate}</p>
        </div>
        <div className="col-sm">
          <h4>Number of Guests</h4>
          <p>{nGuest}</p>
          <h4>Reservation Time</h4>
          <p>{reservationTime}</p>
        </div>
        <div className="col-sm">
          <OverlayTrigger
            overlay={(
              <Tooltip id="tooltips">
                A deposit of 20 SGD is required to secure your reservation.
              </Tooltip>
            )}
          >
            <span className="d-inline-block">
              <div className="d-flex justify-content-end px-5">
                <Button variant="link" disabled style={{ pointerEvents: 'none' }}>
                  Deposit
                  <VscQuestion />
                </Button>
              </div>
            </span>
          </OverlayTrigger>
          <br />
          <PaymentButton />
        </div>
      </div>

      <Link to="/post_confirmation">
        <div className="d-grid gap-2">
          <Button
            className="my-3"
            variant="primary"
            onClick={handleCreate}
          >
            Confirm Reservation

          </Button>
        </div>
      </Link>
    </div>
  );
}

export default ConfirmationDetails;
