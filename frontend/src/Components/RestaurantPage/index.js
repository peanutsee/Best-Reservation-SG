/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Button, Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CarouselSection from './Components/CarouselSection';

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
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h5>About</h5>
            <p>Restaurant Name sells good food that caters to everyone</p>
            <h5>Cuisine</h5>
            <p>Mexican, Fusion, Burgers</p>
            <h5>Price</h5>
            <p>$$$$</p>
          </div>
          <div className="col-xs-12 col-sm-6">
            One of three columns
            <h5>Menu</h5>
            <p>
              <Button>
                View Menu
              </Button>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default index;
