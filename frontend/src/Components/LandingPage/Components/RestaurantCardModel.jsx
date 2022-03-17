/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  Modal, Card, Image, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './app.css';

function PopUpModal(props) {
  const { restaurant } = props;
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {restaurant.restaurant_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <Image
            className="pb-3"
            fluid
            style={{ width: '25rem' }}
            src="/static/assets/burgers.jpg"
          />
        </div>
        <p>{restaurant.restaurant_longer_description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Link to={`/restaurant/${restaurant.id}`}>
          <Button>Check Availability</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

function RestaurantCardModel(props) {
  const { restaurant } = props;
  const [modalShow, setModalShow] = useState(false);

  return (
    <Card className="h-100 shadow shadow-100 rounded glass-card">
      <Card.Body>
        <Image className="p-2" fluid src={restaurant.image} />
        <h3 className="py-2 text-center">{restaurant.restaurant_name}</h3>
        <p>{restaurant.restaurant_shorter_description}</p>
      </Card.Body>
      <Card.Footer className="py-2 text-center">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          View Restaurant
        </Button>
        <PopUpModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          restaurant={restaurant}
        />
      </Card.Footer>
    </Card>
  );
}

export default RestaurantCardModel;
