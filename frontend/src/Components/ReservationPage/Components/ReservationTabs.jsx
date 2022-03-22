/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ActiveReservations from './ActiveReservations';
import CompletedReservations from './CompletedReservations';
import { retrieveAllReservations } from '../Redux/actions';

function ReservationTabs() {
  const dispatch = useDispatch();

  const retrieveReservations = useSelector(
    (state) => state.retrieveReservationsReducer,
  );
  const {
    loading, error, active_reservations, completed_reservations,
  } = retrieveReservations;

  useEffect(() => {
    if (!active_reservations) {
      dispatch(retrieveAllReservations());
    }
  }, [dispatch, active_reservations]);

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
              <ActiveReservations active_reservations={active_reservations} />
            )}
          </Tab>
          <Tab eventKey="previous" title="Previous">
            {completed_reservations && (
              <CompletedReservations
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
