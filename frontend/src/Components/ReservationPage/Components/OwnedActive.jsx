/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { React, useState } from 'react';
import {
  Dropdown, Table,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeletePopUpModal from './DeleteReservations';

function OwnedActive(props) {
  const { active_reservations, setDeleteRemove } = props;
  const [deleteModalShow, setDeleteModalShow] = useState(false);
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
      {/* checking empty array , if not empty run true block
        https://www.codegrepper.com/code-examples/javascript/how+to+check+if+an+array+is+empty+in+react */}
      {active_reservations.length
        ? (
          <tbody align="center">
            {active_reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td width="33%">{reservation.reservation_restaurant}</td>
                <td width="10%">{reservation.reservation_pax}</td>
                <td width="10%">{reservation.reservation_time}</td>
                <td width="15%">{reservation.reservation_date}</td>
                <td>
                  <Dropdown className="d-flex justify-content-center align-center">
                    <Dropdown.Toggle>Manage Reservation</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link
                          to={`/reservation_info/${reservation.id}`}
                          state={{ reservation_id: reservation.reservation_id }}
                        >
                          View and Edit
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setDeleteModalShow(true)}>
                        Delete
                      </Dropdown.Item>
                      <DeletePopUpModal
                        reservation={reservation}
                        setDeleteModalShow={setDeleteModalShow}
                        setDeleteRemove={setDeleteRemove}
                        show={deleteModalShow}
                        onHide={() => setDeleteModalShow(false)}
                      />
                      <Dropdown.Item>
                        <Link to={`/preorder/${reservation.pre_order_id}`}>Order</Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody align="center">
            <td colSpan={4}>
              It seem that you do not own any reservations.
              <Link to="/">Make a Reservation now!</Link>
            </td>
          </tbody>
        ) }
    </Table>

  );
}

export default OwnedActive;
