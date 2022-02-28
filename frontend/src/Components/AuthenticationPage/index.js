/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import {
  Form,
  Button,
  Container,
} from 'react-bootstrap';

function AuthenticationPage() {
  return (
    <Container className="py-5 my-5">
      <Form className="p-5 shadow shadow-100">
        <h1 className="text-center">
          <strong>Welcome back!</strong>
        </h1>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email..."
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else. This will be your
            username.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button type="submit" className="btn btn-primary">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default AuthenticationPage;
