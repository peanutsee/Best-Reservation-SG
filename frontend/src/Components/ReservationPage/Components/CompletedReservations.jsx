/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Table } from 'react-bootstrap';

function CompletedReservations(props) {
  const { completed_reservations } = props;

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
        {completed_reservations.map((reservation, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{reservation.reservation_restaurant}</td>
            <td>{reservation.reservation_pax}</td>
            <td>{reservation.reservation_time}</td>
            <td>{reservation.reservation_time}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CompletedReservations;
