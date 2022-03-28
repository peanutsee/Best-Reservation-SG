import React from 'react';
import {
  Col, Row, Tab, Nav,
} from 'react-bootstrap';
import ReservationTabs from './Components/ReservationTabs';

function index() {
  return (
    <div className="p-5">
      <Tab.Container defaultActiveKey="owned">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column text-center mx-auto">
              <Nav.Item className="mb-3 shadow shadow-100">
                <Nav.Link eventKey="owned">Owned</Nav.Link>
              </Nav.Item>

              <Nav.Item className="mb-3 shadow shadow-100">
                <Nav.Link eventKey="joined">Joined</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content className="shadow shadow-100 p-5">
              <Tab.Pane eventKey="owned" />
              <Tab.Pane eventKey="joined" />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default index;
