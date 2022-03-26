/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import { React, useState } from 'react';
import {
  Dropdown, Table,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RemovePopUpModal from './RemoveReservations';
import DeletePopUpModal from './DeleteReservations';

function ActiveReservations(props) {
  // Please Do not Remove this documentation
  // useState "setDeleteRemove" passed in as props from previous page (ReservationTab)
  // to be passed into RemoveModal and DeleteModal for onclick confirmation button change state
  const { active_reservations, is_part_of_reservation, setDeleteRemove } = props;
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [removeModalShow, setRemoveModalShow] = useState(false);

  return (
    <>
      <h5 className="pt-3 pb-2"> Reservations Owned</h5>
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
                It seem like you do not own any reservation.
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

                        <Dropdown.Item onClick={() => setRemoveModalShow(true)}>
                          Leave Reservation
                        </Dropdown.Item>
                        <RemovePopUpModal
                          reservation={reservation}
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
                It seem like you do not have any upcoming reservation.
              </td>
            </tbody>
          )}
      </Table>

    </>
  );
}

export default ActiveReservations;
