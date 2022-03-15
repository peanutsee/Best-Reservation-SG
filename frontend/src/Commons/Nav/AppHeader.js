/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Button,
  Dropdown,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Components/AuthenticationPage/Redux/actions';

function AppHeader() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>BEST RESERVATION SG</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="mx-4">
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
                  <Link to="/login" className="mx-4">
                    Sign In
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/registration" className="mx-4">
                    Sign Up
                  </Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
