/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  Modal, Card, Image, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PopUpModal(props) {
  const { restaurantID } = props;
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Restaurant Name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <Image className="pb-3" fluid style={{ width: '25rem' }} src="/static/assets/burgers.jpg" />
        </div>
        <p>
          This restaurant serves super good food.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Link to={`/restaurant/${restaurantID}`}>
          <Button>
            Check Availability
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

function RestaurantCardModel(props) {
  const { restaurant } = props;
  const [modalShow, setModalShow] = useState(false);

  return (
    <Card className="h-100">
      <Card.Body className="py-2 text-center">
        <Image className="p-2" fluid src={restaurant.image} />
        <h3>{restaurant.restaurant}</h3>
        <p>{restaurant.description}</p>
      </Card.Body>
      <Card.Footer className="py-2 text-center">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          View Restaurant
        </Button>
        <PopUpModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          restaurantID={restaurant.key}
        />
      </Card.Footer>
    </Card>
  );
}

export default RestaurantCardModel;
