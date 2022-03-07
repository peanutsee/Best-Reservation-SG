/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Form,
  Button,
  Col,
  Row,
  Tab,
  Nav,
} from 'react-bootstrap';

import BootstrapSwitchButton from 'bootstrap-switch-button-react';

function ProfilePage() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Settings</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formPlaintextEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control plaintext readOnly defaultValue="email@example.com" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formPlaintextContactNo">
                    <Form.Label>Contact No.</Form.Label>
                    <Form.Control plaintext readOnly defaultValue="9999 9999" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formPlaintextFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control plaintext readOnly defaultValue="Jon" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formPlaintextLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control plaintext readOnly defaultValue="Ng" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formPlaintextPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control plaintext readOnly defaultValue="password" />
                  </Form.Group>

                  <div className="mb-2">
                    <Button variant="dark">
                      Edit Profile
                    </Button>
                  </div>
                </Row>
              </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <>
                <h2>Notifications</h2>
                <Row>
                  <Col>
                    <p>SMS</p>
                  </Col>
                  <Col>
                    <BootstrapSwitchButton checked onstyle="success" />
                    {/* set style like the align thing */}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Email</p>
                  </Col>
                  <Col>
                    <BootstrapSwitchButton checked onstyle="success" />
                  </Col>
                </Row>
                <h2>Delete Account</h2>
                <Form.Label>Type email to delete</Form.Label>
                <Form.Control
                  type="email"
                  id="inputEmail"
                />
                <div className="mb-2">
                  <Button variant="dark">
                    Submit
                  </Button>
                  {' '}
                </div>
              </>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default ProfilePage;
