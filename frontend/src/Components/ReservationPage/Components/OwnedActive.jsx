/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { React, useEffect, useState } from 'react';
import {
  Dropdown, Table,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeletePopUpModal from './DeleteReservations';
import LinkPopUpModal from './InviteFriends';

function OwnedActive(props) {
  const { active_reservations, setDeleteRemove } = props;
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [linkModalShow, setLinkModalShow] = useState(false);

  /* A useState is used to track to current reservation that was clicked
  this useState is changed onClick of the dropdown menu "handleXXX"
  original useState(active_reservations) is used as a "dummy" placeholder
  */
  const [currentReservation, setCurrentReservation] = useState(active_reservations);
  const [goToReservationInfo, setGoToReservationInfo] = useState(false);
  const [goToPreOrder, setGoToPreOrder] = useState(false);
  /*
  reason why there is href is not inside the following function is cause
  it needs a delay for "currentReservation" to be change
  useEffect is then used to detect in change of state of "setGoToReservationInfo"
  to call href to get to the page, is also true for PreOrder
  */
  const handleGoToReservationInfo = (reservation) => {
    setCurrentReservation(reservation);
    setGoToReservationInfo(true);
  };
  const handleDeleteClick = (reservation) => {
    setDeleteModalShow(true);
    setCurrentReservation(reservation);
  };
  const handleGoToPreOrder = (reservation) => {
    setCurrentReservation(reservation);
    setGoToPreOrder(true);
  };
  const handleInviteClick = (reservation) => {
    setLinkModalShow(true);
    setCurrentReservation(reservation);
  };

  useEffect(() => {
    if (goToReservationInfo === true) {
      window.location.href = `/reservation_info/${currentReservation.id}`;
    }
    if (goToPreOrder === true) {
      window.location.href = `/preorder/${currentReservation.pre_order_id}`;
    }
  }, [goToReservationInfo, goToPreOrder]);

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
                      <Dropdown.Item onClick={() => handleGoToReservationInfo(reservation)}>
                        View and Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDeleteClick(reservation)}>
                        Delete
                      </Dropdown.Item>
                      <DeletePopUpModal
                        reservation={currentReservation}
                        setDeleteModalShow={setDeleteModalShow}
                        setDeleteRemove={setDeleteRemove}
                        show={deleteModalShow}
                        onHide={() => setDeleteModalShow(false)}
                      />
                      <Dropdown.Item onClick={() => handleGoToPreOrder(reservation)}>
                        Order
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleInviteClick(reservation)}>
                        Invite Friends
                      </Dropdown.Item>
                      <LinkPopUpModal
                        reservation={currentReservation}
                        setLinkModalShow={setLinkModalShow}
                        show={linkModalShow}
                        onHide={() => setLinkModalShow(false)}
                      />
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
