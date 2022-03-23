/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Button, Container, Tabs, Tab,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './app.css';

function RestaurantTabs() {
  return (
    <Container>
      <Tabs defaultActiveKey="about">
        <Tab eventKey="about" title="About">
          <div className="row p-3">
            <div className="col-12 col-md-8 ">
              <h4>Overview</h4>
              <p>
                Western cuisine made from scratch where you’ll enjoy delicious
                food.
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
                123 Restaurant Avenue
                <br />
                #01-234
                <br />
                Singapore 123456
              </p>
              <h4>Contact</h4>
              <p>
                Phone: 6123 4567
                <br />
                Email: restaurant@gmail.com
              </p>
            </div>
            <div className="pt-3">
              <Link to="/reservation_confirmation/">
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
