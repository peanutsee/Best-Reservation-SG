/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Button,
  Dropdown, DropdownButton, Nav, Table,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RemovePopUpModal from './RemoveReservations';

function ActiveReservations(props) {
  const { active_reservations, is_part_of_reservation } = props;
  const [modalShow, setModalShow] = useState(false);
  const [dropDownShow, setDropDownShow] = useState(false);

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
                    <DropdownButton className="d-flex justify-content-center align-center" title="Manage Reservation" onToggle={() => setDropDownShow(!dropDownShow)} show={dropDownShow}>
                      <Dropdown.Item>
                        <Button onToggle={() => setDropDownShow(!dropDownShow)}>
                          Hello
                        </Button>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Nav.Link>
                          <Link to={`/reservation_info/${reservation.id}`}>View and Edit</Link>
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

                    </DropdownButton>
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
                          <Nav.Link>
                            <Link
                              to={`/reservation_info/${reservation.id}`}
                              state={{ reservation_id: reservation.reservation_id }}
                            >
                              View and Edit
                            </Link>
                          </Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link>
                            <Link
                              to={`/delete_reservation/${reservation.id}`}
                            >
                              Delete
                            </Link>
                          </Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link>
                            <Link to={`/preorder/${reservation.pre_order_id}`}>Order</Link>
                          </Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setModalShow(true)}>

                          <p> Leave Reservation. To do up idk modal?and some useeffect? </p>
                          <p> To add in somewhere to join reservation as well</p>

                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <RemovePopUpModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    reservation={reservation}
                  />
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
