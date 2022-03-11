/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Dropdown,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function AppHeader() {
  const userInfo = false;

  const logoutHandler = () => {};
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>BEST RESERVATION SG</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
<<<<<<< HEAD
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/RestaurantPage">
              <Nav.Item>Restaurants</Nav.Item>
            </Link>
            <Link to="/reservation">
              <Nav.Item>Reservation</Nav.Item>
            </Link>
            <Link to="/profile">
              <Nav.Item>Profile</Nav.Item>
            </Link>
=======
        <Navbar.Collapse
          id="basic-navbar-nav"
          className='justify-content-end'
        >
          <Nav>
            <Nav.Link className='mx-4'>
              <Link to="/">Home</Link>
            </Nav.Link>
            {userInfo ? (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Profile
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Nav.Link>
                      <Link to="/profile">Profile</Link>
                    </Nav.Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Nav.Link>
                      <Link to="/reservation">Reservation</Link>
                    </Nav.Link>
                  </Dropdown.Item>
                  <NavDropdown.Divider />

                  <Dropdown.Item>
                    <Link to="/">
                      <Button
                        variant="outline-light"
                        className="text-black"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Button>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Nav.Link>
                  <Link to="/login" className='mx-4'>Sign In</Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/registration" className='mx-4'>Sign Up</Link>
                </Nav.Link>
              </>
            )}
>>>>>>> 88d188b10c7a594e4d4a2a85e6616cd66d5f8050
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
