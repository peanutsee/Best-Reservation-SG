/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UpdatedDetailsForm from './UpdatedDetailsForm';
import Authentication from './Authentication';
import ConfirmationDetails from './ConfirmationDetails';

function AccordionOptions() {
  const userLogin = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLogin;
  return (
    <Container className="p-3">
      <div className="py-3">
        <Link to="/restaurant/1">Back</Link>
      </div>
      <h3>Complete your reservation</h3>
      {userInfo ? (
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Authentication</Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Details</Accordion.Header>
            <Accordion.Body>
              <UpdatedDetailsForm />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Confirmation</Accordion.Header>
            <Accordion.Body>
              <ConfirmationDetails />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Authentication</Accordion.Header>
            <Accordion.Body>
              <Authentication />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Details</Accordion.Header>
            <Accordion.Body>
              <UpdatedDetailsForm />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Confirmation</Accordion.Header>
            <Accordion.Body>
              <ConfirmationDetails />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) }
    </Container>
  );
}

export default AccordionOptions;
