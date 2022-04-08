/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import { React, useEffect, useState } from 'react';
import {
  Button, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { VscQuestion } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import PaymentButton from './PaymentButton';
import { createReservation } from '../Redux/actions';

function ConfirmationDetails(props) {
  const navigate = useNavigate();
  const {
    userInfo, reservationDate, reservationTime, nGuest, restaurantID,
  } = props;
  const [created, setCreated] = useState(false);
  const [paid, setPaid] = useState(false);
  const createsReservation = useSelector(
    (state) => state.createReservationReducer,
  );
  const {
    reservation,
  } = createsReservation;

  const reservation_date_time = `${reservationDate} ${reservationTime}`;
  const dispatch = useDispatch();
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createReservation(restaurantID, reservation_date_time, nGuest));
    setCreated(true);
  };

  useEffect(() => {
    if (created && reservation) {
      window.location.href = `/post_confirmation/${reservation.id}`;
    }
  }, [created, reservation]);

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
          <PaymentButton
            setPaid={setPaid}
            paid={paid}
          />
        </div>
      </div>
      {(!paid || !reservationDate || !reservationTime || !nGuest) ? (
        <Button onClick={() => { alert('Please ensure all form fields are filled and deposit is paid!'); }}>Confirm Reservation</Button>
      ) : (
        <Button type="submit" className="my-3" onClick={handleCreate}>Confirm Reservation</Button>
      )}
    </div>
  );
}

export default ConfirmationDetails;
