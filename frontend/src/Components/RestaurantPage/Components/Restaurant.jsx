/* eslint-disable camelcase */
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CarouselSection from './CarouselSection';
import RestaurantTabs from './RestaurantTabs';

function Restaurant() {
  const reservation_confirmation = null;
  return (
    <Container className="px-5">
      <div className="py-3">
        <Link to="/">Back</Link>
      </div>
      <CarouselSection />
      <h1 className="py-3" style={{ textAlign: 'center' }}>
        Restaurant Name
      </h1>
      <RestaurantTabs props={reservation_confirmation} />
    </Container>
  );
}

export default Restaurant;
