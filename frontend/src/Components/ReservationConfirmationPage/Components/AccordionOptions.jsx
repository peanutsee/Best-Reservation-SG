import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import DetailsForm from './DetailsForm';
import Authentication from './Authentication';
import ConfirmationDetails from './ConfirmationDetails';

function AccordionOptions() {
  return (
    <Container className="p-3">
      <h3>Complete your reservation</h3>
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
            <DetailsForm />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Confirmation</Accordion.Header>
          <Accordion.Body>
            <ConfirmationDetails />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default AccordionOptions;
