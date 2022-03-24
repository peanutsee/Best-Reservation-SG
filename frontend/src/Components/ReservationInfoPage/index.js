/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CarouselSection from './Components/CarouselSection';
import RestaurantInfo from './Components/RestaurantInfo';

function index() {
  return (
    <div>
      <Container className="px-5">
        <div className="py-3">
          <Link to="/">
            Back
          </Link>
        </div>
        <CarouselSection />
        <h1 className="py-3" style={{ textAlign: 'center' }}>Restaurant Name</h1>
        <RestaurantInfo />
      </Container>
    </div>
  );
}

export default index;
