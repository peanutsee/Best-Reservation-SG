/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { React, useState, useEffect } from 'react';
import {
  Dropdown, Table,
} from 'react-bootstrap';
import DeletePopUpModal from './DeleteReservations';
import RemovePopUpModal from './RemoveReservations';

function JoinedActive(props) {
  const { is_part_of_reservation, setDeleteRemove } = props;
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [removeModalShow, setRemoveModalShow] = useState(false);

  /* A useState is used to track to current reservation that was clicked
  this useState is changed onClick of the dropdown menu "handleXXX"
  original useState(is_part_of_reservation) is used as a "dummy" placeholder
  */
  const [currentReservation, setCurrentReservation] = useState(is_part_of_reservation);
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
  const handleRemomveClick = (reservation) => {
    setRemoveModalShow(true);
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

                      <Dropdown.Item onClick={() => handleRemomveClick(reservation)}>
                        Leave Reservation
                      </Dropdown.Item>
                      <RemovePopUpModal
                        reservation={currentReservation}
                        setRemoveModalShow={setRemoveModalShow}
                        setDeleteRemove={setDeleteRemove}
                        show={removeModalShow}
                        onHide={() => setRemoveModalShow(false)}
                      />

                    </Dropdown.Menu>
                  </Dropdown>
                </td>

              </tr>
            ))}

          </tbody>
        )
        : (
          <tbody align="center">
            <td colSpan={4}>
              It seems that you do not have any upcoming reservations.
            </td>
          </tbody>
        )}
    </Table>
  );
}
export default JoinedActive;
