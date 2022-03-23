/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { VscQuestion } from 'react-icons/vsc';

function ConfirmationDetails() {
  return (
    <div className="p-5 shadow shadow-100 row">
      <h1 className="text-center">Confirm Reservation</h1>
      <div className="pt-5 row">
        <div className="col-sm">
          <h4>Name</h4>
          <p>Customer Name</p>
          <h4>Reservation Date</h4>
          <p>1 June 2022</p>
        </div>
        <div className="col-sm">
          <h4>Number of Guests</h4>
          <p>4</p>
          <h4>Reservation Time</h4>
          <p>19:00</p>
        </div>
        <div className="col-sm">
          <OverlayTrigger
            overlay={<Tooltip id="tooltips">A deposit of 20 SGD is required to secure your reservation.</Tooltip>}
          >
            <span className="d-inline-block">
              <Button variant="link" disabled style={{ pointerEvents: 'none' }}>
                Deposit
                <VscQuestion />
              </Button>
            </span>
          </OverlayTrigger>
          <br />
          <Button variant="primary">
            Confirm Reservation
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationDetails;
