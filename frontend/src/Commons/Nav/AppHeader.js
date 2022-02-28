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
            <Nav.Link href="#restaurants">Restaurants</Nav.Link>
            <Nav.Link href="#reservation">Reservation</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
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
