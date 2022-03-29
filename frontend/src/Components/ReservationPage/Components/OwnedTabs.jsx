/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import { React, useEffect, useState } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReservations } from '../Redux/actions';
import './reservation.css';
import OwnedActive from './OwnedActive';
import OwnedCompleted from './OwnedCompleted';

function ReservationTabs() {
  const dispatch = useDispatch();
  const [deleteRemove, setDeleteRemove] = useState(false);
  const retrieveReservations = useSelector(
    (state) => state.getAllReservationsReducer,
  );
  const {
    loading, error, active_reservations, completed_reservations,
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
    <Container className="p-3">
      <h1 className="mb-5">Reservations Owned</h1>
      {loading ? (
        <h1>Loading Reservations...</h1>
      ) : error ? (
        <h1>Error Loading Reservations...</h1>
      ) : (
        <Tabs defaultActiveKey="current">
          <Tab eventKey="current" title="Current">
            {active_reservations && (
              <OwnedActive
                active_reservations={active_reservations}
                setDeleteRemove={setDeleteRemove}
              />
            )}
          </Tab>
          <Tab eventKey="previous" title="Previous">
            {completed_reservations && (
              <OwnedCompleted
                completed_reservations={completed_reservations}
              />
            )}
          </Tab>
        </Tabs>
      )}
    </Container>
  );
}

export default ReservationTabs;
