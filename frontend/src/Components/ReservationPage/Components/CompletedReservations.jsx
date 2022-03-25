/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import { React } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CompletedReservations(props) {
  const { completed_reservations, is_part_of_reservation } = props;

  return (
    <>
      <h5 className="pt-3 pb-2"> Reservation Owned</h5>
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
        {/* checking empty array , if not empty run true block
        https://www.codegrepper.com/code-examples/javascript/how+to+check+if+an+array+is+empty+in+react */}
        {completed_reservations.length
          ? (
            <tbody align="center">
              {completed_reservations.map((reservation, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td width="33%">{reservation.reservation_restaurant}</td>
                  <td width="10%">{reservation.reservation_pax}</td>
                  <td width="10%">{reservation.reservation_time}</td>
                  <td width="15%">{reservation.reservation_date}</td>
                  <td>
                    <Link to={`/payment/${reservation.pre_order_id}`}><button type="button" className="btn btn-primary">Split Bill</button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          )
          : (
            <tbody align="center">
              <td colSpan={4}>
                It seem like you do not have any past reservation.
                <Link to="/">Make a Reservation now!</Link>
              </td>
            </tbody>
          ) }
      </Table>

      <h5 className="pt-2 pb-2"> Reservation Joined</h5>
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
        {/* checking empty array , if not empty run true block
        https://www.codegrepper.com/code-examples/javascript/how+to+check+if+an+array+is+empty+in+react */}
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
                    <Link to={`/payment/${reservation.pre_order_id}`}><button type="button" className="btn btn-primary">Join Split Bill</button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          )
          : (
            <tbody align="center">
              <td colSpan={4}>
                It seem like you do not have any past reservation.
              </td>
            </tbody>
          )}
      </Table>
    </>
  );
}

export default CompletedReservations;
