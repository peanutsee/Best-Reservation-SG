/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pdf from 'react-to-pdf';

const ref = React.createRef();

function Confirmation() {
  return (
    <Container ref={ref} className="px-5">
      <h1> Reservation Confirmation </h1>
      <div className=" pt-5 row">
        <div className="col-6">
          <h3 className="pb-3"> Your Details </h3>
          <h5>Name</h5>
          <p>Customer Name</p>
          <h5>Reservation Date</h5>
          <p>1 June 2022</p>
          <h5>Number of Guests</h5>
          <p>4</p>
          <h5>Reservation Time</h5>
          <p>19:00</p>
          <div className="pb-4">
            <Link to="/">
              <Button size="md">
                Go to home page
              </Button>
            </Link>
            {' '}
            <Button variant="success" className="ml-2" size="md">I want to order</Button>
          </div>
        </div>

        <div className="col-6">
          <h3>QR CODE</h3>
          <Pdf targetRef={ref} filename="reservation-confirmation.pdf">
            {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
          </Pdf>
        </div>
      </div>
    </Container>

  );
}

export default Confirmation;
