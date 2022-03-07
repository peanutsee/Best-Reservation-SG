/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable linebreak-style */
import React from 'react';
import {
  Dropdown, Table, Container, Tabs, Tab,
} from 'react-bootstrap';

function ReservationTabs() {
  return (
    <Container>
      <Tabs
        defaultActiveKey="reservations"
      >
        <Tab eventKey="current" title="Current">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Restaurant</th>
                <th>Pax</th>
                <th>Timing</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Koma</td>
                <td>3</td>
                <td>7:30pm</td>
                <td>25 April 2022</td>
                <td>
                  <Dropdown className="d-flex justify-content-center align-center">
                    <Dropdown.Toggle>
                      Manage Reservation
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Order</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Burger and Lobster</td>
                <td>2</td>
                <td>7:00pm</td>
                <td>25 May 2022</td>
                <td>
                  <Dropdown className="d-flex justify-content-center align-center">
                    <Dropdown.Toggle id="dropdown-basic">
                      Manage Reservation
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Order</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lavo</td>
                <td>2</td>
                <td>7:15pm</td>
                <td>2 June 2022</td>
                <td>
                  <Dropdown className="d-flex justify-content-center align-center">
                    <Dropdown.Toggle id="dropdown-basic">
                      Manage Reservation
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Order</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="previous" title="Previous">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Restaurant</th>
                <th>Pax</th>
                <th>Timing</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Koma</td>
                <td>3</td>
                <td>7:30pm</td>
                <td>23 Jan 2022</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Burger and Lobster</td>
                <td>2</td>
                <td>7:00pm</td>
                <td>24 Feb 2022</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lavo</td>
                <td>2</td>
                <td>7:15pm</td>
                <td>1 March 2022</td>
              </tr>
            </tbody>
          </Table>
        </Tab>
      </Tabs>

    </Container>
  );
}

export default ReservationTabs;
