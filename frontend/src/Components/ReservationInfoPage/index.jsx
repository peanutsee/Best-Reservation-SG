/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-nested-ternary */
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
} from 'react-bootstrap';

import CarouselSection from './Components/CarouselSection';
import RestaurantInfo from './Components/RestaurantInfo';
import { getReservation } from './Redux/actions';

function index() {
  // https://v5.reactrouter.com/web/api/Hooks/useparams
  // "path/:id" in nav index.js
  const dispatch = useDispatch();
  const params = useParams();

  const retrieveReservation = useSelector(
    (state) => state.getReservationReducer,
  );
  const {
    loading, error, reservation,
  } = retrieveReservation;

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
            <Link to="/">
              Back
            </Link>
          </div>
          {reservation && (/* need this reservation && else wont work, not sure why */
          <>
            <CarouselSection />
            <h1 className="py-3" style={{ textAlign: 'center' }}>{reservation.Restaurant.restaurant_name}</h1>
            <RestaurantInfo reservation={reservation} />
          </>
          )}
        </Container>
      )}
    </div>
  );
}

export default index;
