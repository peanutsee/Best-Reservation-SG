/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import {
  Col, Row, Tab, Nav,
} from "react-bootstrap";
import NotificationSettings from "./Components/NotificationSettings";
import ProfileSettings from "./Components/ProfileSettings";

function ProfilePage() {
  return (
    <div className="p-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column text-center">
              <Nav.Item className="mb-3 shadow shadow-100">
                <Nav.Link eventKey="profile">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-3 shadow shadow-100">
                <Nav.Link eventKey="notification">Notifications</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content className="shadow shadow-100 p-5">
              <Tab.Pane eventKey="profile">
                <ProfileSettings />
              </Tab.Pane>
              <Tab.Pane eventKey="notification">
                <NotificationSettings />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default ProfilePage;
