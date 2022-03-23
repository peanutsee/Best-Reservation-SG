/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Dropdown, Nav, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ActiveReservations(props) {
  const { active_reservations } = props;

  return (
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
        {active_reservations.map((reservation, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{reservation.reservation_restaurant}</td>
            <td>{reservation.reservation_pax}</td>
            <td>{reservation.reservation_time}</td>
            <td>{reservation.reservation_time}</td>
            <td>
              <Dropdown className="d-flex justify-content-center align-center">
                <Dropdown.Toggle>Manage Reservation</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Nav.Link>
                      <Link to={`/reservation_info/${reservation.id}`}>Edit</Link>
                    </Nav.Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Nav.Link>
                      <Link to={`/delete_reservation/${reservation.id}`}>Delete</Link>
                    </Nav.Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Nav.Link>
                      <Link to={`/preorder/${reservation.pre_order_id}`}>Order</Link>
                    </Nav.Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ActiveReservations;
