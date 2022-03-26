/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import { React, useState } from 'react';
import {
  Container, Button, Modal, Tab, Tabs, Form,
} from 'react-bootstrap';
import './app.css';
import DateForm from './DateForm';
import TimeForm from './TimeForm';

function PopUpModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Reservation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Reservation Date</Form.Label>
          <Form.Group>
            <DateForm />
          </Form.Group>
        </Form>
        <Form>
          <Form.Label>Reservation Time</Form.Label>
          <Form.Group>
            <TimeForm />
          </Form.Group>
        </Form>
        <Form.Group>
          <Form.Label>Number of Guests</Form.Label>
          <Form.Select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}
function RestaurantInfo(props) {
  const { reservation } = props;
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container>
      <Tabs defaultActiveKey="reservation_details">
        <Tab eventKey="reservation_details" title="Reservation Details">
          <div className="row p-3">
            <div className="col-12 col-md-8 ">
              <h4>Name</h4>
              <p>Customer Name</p>
              <h4>Number of Guests</h4>
              <p>4</p>
            </div>
            <div className="col-6 col-md-4 border-left border-dark">
              <h4>Reservation Date</h4>
              <p>1 June 2022</p>
              <h4>Reservation Time</h4>
              <p>19:00</p>
            </div>
            <div className="pt-3">
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Edit Reservation
              </Button>
              <PopUpModal
                show={modalShow}
                onHide={() => setModalShow(false)}
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
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default RestaurantInfo;
