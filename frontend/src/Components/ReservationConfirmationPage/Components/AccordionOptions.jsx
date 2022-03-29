/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthDetailsForm from './AuthDetailsForm';
import Authentication from './Authentication';
import ConfirmationDetails from './ConfirmationDetails';

function AccordionOptions() {
  const userLogin = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLogin;

  const params = useParams();

  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [nGuest, setNGuest] = useState(0);

  return (
    <Container className="p-3">
      <div className="py-3">
        <Link to={`/restaurant/${params.id}`}>Back</Link>
      </div>
      <h3>Complete your reservation</h3>
      {!userInfo ? (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Authentication</Accordion.Header>
            <Accordion.Body>
              <Authentication />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <h2 className="accordion-header">
              <button
                type="button"
                aria-expanded="false"
                disabled
                className="accordion-button collapsed"
              >
                Details
              </button>
            </h2>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <h2 className="accordion-header">
              <button
                type="button"
                aria-expanded="false"
                disabled
                className="accordion-button collapsed"
              >
                Confirmation
              </button>
            </h2>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Accordion defaultActiveKey="1" alwaysOpen>
          <Accordion.Item eventKey="0">
            <h2 className="accordion-header">
              <button
                type="button"
                aria-expanded="false"
                disabled
                className="accordion-button collapsed"
              >
                Authentication
              </button>
            </h2>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Details</Accordion.Header>
            <Accordion.Body>
              <AuthDetailsForm
                userInfo={userInfo}
                setReservationDate={setReservationDate}
                setReservationTime={setReservationTime}
                setNGuest={setNGuest}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Confirmation</Accordion.Header>
            <Accordion.Body>
              <ConfirmationDetails
                userInfo={userInfo}
                reservationDate={reservationDate}
                reservationTime={reservationTime}
                nGuest={nGuest}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </Container>
  );
}

export default AccordionOptions;
