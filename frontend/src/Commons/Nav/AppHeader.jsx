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
            <div className="mx-4">
              <Link to="/">Home</Link>
            </div>
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
                <div>
                  <Link to="/login" className="mx-4">
                    Sign In
                  </Link>
                </div>

                <div>
                  <Link to="/registration" className="mx-4">
                    Sign Up
                  </Link>
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
