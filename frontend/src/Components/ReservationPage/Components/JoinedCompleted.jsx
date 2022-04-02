/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import { React, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function JoinedCompleted(props) {
  const { is_part_of_reservation } = props;

  /*
  I have checked, both bill, Payment.jsx uses retrieve_payment order_id as parameter
  Split bill, SplitBill.jsx uses retrieve_payment reducer uses order_id as parameter
  i.e all reducers in these 2 pages uses order_id
  Checked commit: 645605fc2336c6d9cf270c150ba4c632ac678be9 ,uses"`/payment/${reservation.order_id}`"
  */
  const [currentReservation, setCurrentReservation] = useState(is_part_of_reservation);
  const [goTosplitBill, setGoToSplitBill] = useState(false);
  const handleGoToSplitBill = (reservation) => {
    setCurrentReservation(reservation);
    setGoToSplitBill(true);
  };

  useEffect(() => {
    if (goTosplitBill === true) {
      window.location.href = `/payment/${currentReservation.id}`;
    }
  }, [goTosplitBill]);

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
                  <button type="button" className="btn btn-primary" onClick={() => handleGoToSplitBill(reservation)}>Split Bill</button>
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
