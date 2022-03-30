/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import { React } from 'react';
import { Table } from 'react-bootstrap';

function JoinedCompleted(props) {
  const { is_part_of_reservation } = props;

  return (
    <Table striped bordered hover>
      <thead align="center">
        <tr>
          <th>#</th>
          <th>Restaurant</th>
          <th>Pax</th>
          <th>Timing</th>
          <th>Date</th>
        </tr>
      </thead>
      {is_part_of_reservation.length
        ? (
          <tbody align="center">
            {is_part_of_reservation.map((reservation, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td width="33%">{reservation.reservation_restaurant}</td>
                <td width="10%">{reservation.reservation_pax}</td>
                <td width="10%">{reservation.reservation_time}</td>
                <td width="15%">{reservation.reservation_date}</td>
                <td>
                  <a href={reservation.bill_url}><button type="button" className="btn btn-primary">Join Split Bill</button></a>
                </td>
              </tr>
            ))}
          </tbody>
        )
        : (
          <tbody align="center">
            <td colSpan={4}>
              It seems that you do not have any past reservations.
            </td>
          </tbody>
        )}
    </Table>
  );
}

export default JoinedCompleted;
