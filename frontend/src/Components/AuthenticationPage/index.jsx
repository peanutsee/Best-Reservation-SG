/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import { Container } from 'react-bootstrap';
import LoginForm from './Components/LoginForm';

function AuthenticationPage() {
  return (
    <Container className="p-5">
      <LoginForm />
    </Container>
  );
}

export default AuthenticationPage;
