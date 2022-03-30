/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { VscQuestion } from 'react-icons/vsc';
import PaymentButton from './PaymentButton';

function ConfirmationDetails(props) {
  const {
    userInfo, reservationDate, reservationTime, reservationPax,
  } = props;
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
          <p>{reservationPax}</p>
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
              <Button variant="link" disabled style={{ pointerEvents: 'none' }}>
                Deposit
                <VscQuestion />
              </Button>
            </span>
          </OverlayTrigger>
          <br />
          <Link to="/post_confirmation/1">
            <Button variant="primary">Confirm Reservation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationDetails;