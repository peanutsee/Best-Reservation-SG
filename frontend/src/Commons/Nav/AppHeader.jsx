/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import {
  Navbar, Container, Nav, Dropdown, NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Components/AuthenticationPage/Redux/actions';
import './app.css';

function AppHeader() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar className="transparent-bg" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>BEST RESERVATION SG</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {userInfo ? (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Profile
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <div>
                      <Link to="/profile">Profile</Link>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <div>
                      <Link to="/reservation">Reservation</Link>
                    </div>
                  </Dropdown.Item>
                  <NavDropdown.Divider />

                  <Dropdown.Item>
                    <Link to="/">
                      <div
                        variant="outline-light"
                        className="text-black"
                        onClick={logoutHandler}
                      >
                        Logout
                      </div>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <div className="header-links">
                  <Link to="/">Home</Link>
                </div>
                <div className="header-links">
                  <Link to="/login">Sign In</Link>
                </div>

                <div className="header-links">
                  <Link to="/registration">Sign Up</Link>
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
