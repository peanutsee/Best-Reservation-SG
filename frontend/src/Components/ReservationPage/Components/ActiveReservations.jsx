/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import { React, useState } from 'react';
import {
  Dropdown, Nav, Table, Modal, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PopUpModal(props) {
  const { active_reservations } = props;
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h5>Delete Reservation</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure you want to delete this reservation?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger">Delete Reservation</Button>
      </Modal.Footer>
    </Modal>
  );
}
function ActiveReservations(props) {
  const { active_reservations, is_part_of_reservation } = props;
  const [modalShow, setModalShow] = useState(false);
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

        {active_reservations !== []
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
                          <Link to={`/reservation_info/${reservation.id}`}>Edit</Link>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setModalShow(true)}>
                          Delete
                        </Dropdown.Item>
                        <PopUpModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
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

        {is_part_of_reservation !== null
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
                          <Link to={`/reservation_info/${reservation.id}`}>Edit</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to={`/delete_reservation/${reservation.id}`}>Delete</Link>
                        </Dropdown.Item>
                        <PopUpModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                        <Dropdown.Item>
                          <Link to={`/preorder/${reservation.pre_order_id}`}>Order</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <p> Leave Reservation. To do up idk modal?and some useeffect? </p>
                          <p> To add in somewhere to join reservation as well</p>
                        </Dropdown.Item>
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
