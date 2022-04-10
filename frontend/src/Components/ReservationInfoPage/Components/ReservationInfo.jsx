/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import CarouselSection from './CarouselSection';
import RestaurantInfo from './RestaurantInfo';
import { getReservation } from '../Redux/actions';
import JoinReservationPopUpModal from './JoinReservationModal';

function ReservationInfo() {
  const dispatch = useDispatch();
  const params = useParams();

  const [joinModal, setJoinedModal] = useState(true);
  const [joined, setJoined] = useState(false);
  const [edited, setEdited] = useState(false);

  const retrieveReservation = useSelector(
    (state) => state.getReservationReducer,
  );
  const { loading, error, reservation } = retrieveReservation;

  useEffect(() => {
    if (!reservation) {
      dispatch(getReservation(params.id));
    }
    if (edited === true) {
      dispatch(getReservation(params.id));
      setEdited(false);
    }
    if (joined === true) {
      dispatch(getReservation(params.id));
      setJoined(false);
    }
  }, [dispatch, reservation, joined, edited]);

  return (
    <div>
      {error && (
        <JoinReservationPopUpModal show={joinModal} setJoined={setJoined} />
      )}
      <Container className="px-5">
        <div className="py-3">
          <Link to="/">Back</Link>
        </div>
        {reservation && (
          <>
            <CarouselSection />
            <h1 className="py-3 text-center">
              {reservation.Restaurant.restaurant_name}
            </h1>
            <RestaurantInfo reservation={reservation} setEdited={setEdited} />
          </>
        )}
      </Container>
    </div>
  );
}

export default ReservationInfo;
