/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Button, Container, Tabs, Tab,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './app.css';

function RestaurantTabs(props) {
  const { reservation_confirmation, restaurant } = props;
  return (
    <Container>
      <Tabs defaultActiveKey="about">
        <Tab eventKey="about" title="About">
          <div className="row p-3">
            <div className="col-12 col-md-8 ">
              <h4>Overview</h4>
              <p>
                {restaurant.restaurant_longer_description}
                <br />
                Reserve a table now!
              </p>
              <h4>Opening Hours</h4>
              <p>
                Mon-Thurs: 2:00-10:30pm
                <br />
                Fri: 2:00-11:30pm
                <br />
                Sat-Sun: 2:00-8:00pm
              </p>
            </div>
            <div className="col-6 col-md-4 border-left border-dark">
              <h4>Address</h4>
              <p>
                {restaurant.restaurant_street_name !== ''
                  ? (
                    restaurant.restaurant_street_name
                  ) : (
                    <span>123 Restaurant Avenue(outdated address)</span>
                  )}
                <br />

                {'# '}
                {restaurant.restaurant_floor_number !== ''
                  ? (
                    restaurant.restaurant_floor_number
                  ) : (
                    <span>01</span>
                  )}
                {' - '}
                {restaurant.restaurant_unit_number !== ''
                  ? (
                    restaurant.restaurant_unit_number
                  ) : (
                    <span>234</span>
                  )}
                <br />

                <p>
                  {' '}
                  Singapore
                  {' '}
                  {restaurant.restaurant_postal_code}
                  {' '}
                </p>
              </p>
              <h4>Contact</h4>
              <p>
                {'Phone: '}
                {restaurant.restaurant_primary_contact !== ''
                  ? (
                    restaurant.restaurant_primary_contact
                  ) : (
                    <span>+65 87654321</span>
                  )}
                <br />
                {'Email: '}
                {restaurant.restaurant_official_email !== ''
                  ? (
                    restaurant.restaurant_official_email
                  ) : (
                    <span>restaurant@gmail.com</span>
                  )}
                <br />
                {'Website: '}
                {restaurant.restaurant_official_website !== ''
                  ? (
                    restaurant.restaurant_official_website
                  ) : (
                    <span>www.restaurant.com</span>
                  )}
              </p>
            </div>
            <div className="pt-3">
              <Link to="/reservation_confirmation/1">
                <Button variant="success" size="md">
                  Reserve Now
                </Button>
              </Link>
            </div>
          </div>
        </Tab>
        <Tab eventKey="menu" title="Menu">
          sdsdws
        </Tab>
      </Tabs>
    </Container>
  );
}

export default RestaurantTabs;
