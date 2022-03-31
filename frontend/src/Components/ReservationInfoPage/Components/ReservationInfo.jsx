/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import CarouselSection from './CarouselSection';
import RestaurantInfo from './RestaurantInfo';
import { getReservation } from '../Redux/actions';

function ReservationInfo() {
  const dispatch = useDispatch();
  const params = useParams();

  const retrieveReservation = useSelector(
    (state) => state.getReservationReducer,
  );
  const { loading, error, reservation } = retrieveReservation;

  useEffect(() => {
    if (!reservation) {
      dispatch(getReservation(params.id));
    }
  }, [dispatch, reservation]);

  return (
    <div>
      {loading ? (
        <h1>Loading Reservation...</h1>
      ) : error ? (
        <h1>Error Loading Reservation...</h1>
      ) : (
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
              <RestaurantInfo reservation={reservation} />
            </>
          )}
        </Container>
      )}
    </div>
  );
}

export default ReservationInfo;
