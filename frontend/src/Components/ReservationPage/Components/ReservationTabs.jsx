/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import { React, useEffect, useState } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ActiveReservations from './ActiveReservations';
import CompletedReservations from './CompletedReservations';
import { getAllReservations } from '../Redux/actions';
import './reservation.css';

function ReservationTabs() {
  const dispatch = useDispatch();
  const [deleteRemove, setDeleteRemove] = useState(false);
  const retrieveReservations = useSelector(
    (state) => state.getAllReservationsReducer,
  );
  const {
    loading, error, active_reservations, completed_reservations, is_part_of_reservation,
  } = retrieveReservations;

  useEffect(() => {
    if (!active_reservations) {
      dispatch(getAllReservations());
    }
    if (deleteRemove === true) {
      dispatch(getAllReservations());
      setDeleteRemove(false);
    }
  }, [dispatch, active_reservations, completed_reservations, deleteRemove]);

  return (
    <Container className="p-5">
      <h1 className="mb-5">Reservation Management</h1>
      {loading ? (
        <h1>Loading Reservations...</h1>
      ) : error ? (
        <h1>Error Loading Reservations...</h1>
      ) : (
        <Tabs defaultActiveKey="current">
          <Tab eventKey="current" title="Current">
            {active_reservations && (
              <ActiveReservations
                active_reservations={active_reservations}
                is_part_of_reservation={is_part_of_reservation.active_part_of}
                setDeleteRemove={setDeleteRemove}
              />
            )}
          </Tab>
          <Tab eventKey="previous" title="Previous">
            {completed_reservations && (
              <CompletedReservations
                completed_reservations={completed_reservations}
                is_part_of_reservation={is_part_of_reservation.completed_part_of}
              />
            )}
          </Tab>
        </Tabs>
      )}
    </Container>
  );
}

export default ReservationTabs;
