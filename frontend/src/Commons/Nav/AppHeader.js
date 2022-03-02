/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  ButtonGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>Best Reservation SG</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/RestaurantPage">
              <Nav.Item>Restaurants</Nav.Item>
            </Link>
            <Link to="/ReservationPage">
              <Nav.Item>Reservation</Nav.Item>
            </Link>
            <Link to="/ProfilePage">
              <Nav.Item>Profile</Nav.Item>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline className="mx-3">
          <ButtonGroup>
            <Button variant="secondary" as={Link} to="/login">
              Login
            </Button>
            <Button variant="secondary" as={Link} to="/signup">
              Signup
            </Button>
          </ButtonGroup>
        </Form>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
