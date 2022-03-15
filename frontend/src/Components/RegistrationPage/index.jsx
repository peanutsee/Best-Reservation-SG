import React from 'react';
import { Container } from 'react-bootstrap';
import RegistrationForm from './Components/RegistrationForm';

function RegistrationPage() {
  return (
    <Container className="p-5">
      <RegistrationForm />
    </Container>
  );
}

export default RegistrationPage;
