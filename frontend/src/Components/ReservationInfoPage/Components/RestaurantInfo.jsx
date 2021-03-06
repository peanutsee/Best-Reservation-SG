/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import { React, useState } from 'react';
import {
  Container, Button, Tab, Tabs,
} from 'react-bootstrap';
import './app.css';
import EditPopUpModal from './EditReservation';
import LinkPopUpModal from './ReservationLink';

function RestaurantInfo(props) {
  const { reservation, setEdited } = props;
  const [editModalShow, setEditModalShow] = useState(false);
  const [linkModalShow, setLinkModalShow] = useState(false);

  return (
    <Container>
      <Tabs defaultActiveKey="reservation_details">
        <Tab eventKey="reservation_details" title="Reservation Details">
          <div className="row p-3">
            <div className="col-12 col-md-8 ">
              <h3>Reservation Owner</h3>
              <h5>{reservation.reservation_owner}</h5>
              <p> </p>
              <h3>Number of Guests</h3>
              <p>{reservation.reservation_pax}</p>
            </div>
            <div className="col-6 col-md-4 border-left border-dark">
              <h3>Reservation Date</h3>
              <p>{reservation.reservation_date}</p>
              <h3>
                Reservation Time
              </h3>
              <p>
                {reservation.reservation_time}
              </p>
            </div>
            <div className="pt-3">
              <Button variant="primary" onClick={() => setEditModalShow(true)}>
                Edit Reservation
              </Button>
              <EditPopUpModal
                show={editModalShow}
                setEditModalShow={setEditModalShow}
                setEdited={setEdited}
                reservation={reservation}
                onHide={() => setEditModalShow(false)}
              />
              {' '}
              <Button variant="primary" onClick={() => setLinkModalShow(true)}>
                Reservation Link
              </Button>
              <LinkPopUpModal
                show={linkModalShow}
                onHide={() => setLinkModalShow(false)}
                reservation={reservation}
              />
            </div>
          </div>
        </Tab>
        <Tab eventKey="restaurant_details" title="Restaurant Details">
          <div className="row p-3">
            <div className="col-12 col-md-8 ">
              <h4>Overview</h4>
              <p>
                {reservation.Restaurant.restaurant_longer_description}
                <br />
                <br />
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
                {reservation.Restaurant.restaurant_street_name !== ''
                  ? (
                    reservation.Restaurant.restaurant_street_name
                  ) : (
                    <span>123 Restaurant Avenue(outdated address)</span>
                  )}
                <br />

                {'# '}
                {reservation.Restaurant.restaurant_floor_number !== ''
                  ? (
                    reservation.Restaurant.restaurant_floor_number
                  ) : (
                    <span>01</span>
                  )}
                {' - '}
                {reservation.Restaurant.restaurant_unit_number !== ''
                  ? (
                    reservation.Restaurant.restaurant_unit_number
                  ) : (
                    <span>234</span>
                  )}
                <br />

                <p>
                  {' '}
                  Singapore
                  {' '}
                  {reservation.Restaurant.restaurant_postal_code}
                  {' '}
                </p>
              </p>
              <h4>Contact</h4>
              <p>
                {reservation.Restaurant.restaurant_primary_contact !== ''
                  ? (
                    reservation.Restaurant.restaurant_primary_contact
                  ) : (
                    <span> 12345678</span>
                  )}
                <br />
                {'Email: '}
                {reservation.Restaurant.restaurant_official_email !== ''
                  ? (
                    reservation.Restaurant.restaurant_official_email
                  ) : (
                    <span>restaurant@gmail.com</span>
                  )}
                <br />
                {'Website: '}
                {reservation.Restaurant.restaurant_official_website !== ''
                  ? (
                    reservation.Restaurant.restaurant_official_website
                  ) : (
                    <span>www.restaurant.com</span>
                  )}
              </p>
            </div>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default RestaurantInfo;
