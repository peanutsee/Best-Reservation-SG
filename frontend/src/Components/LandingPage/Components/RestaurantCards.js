/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import {
  Card, Row, Col, Image, Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveRestaurants } from '../Redux/actions';

const data = [
  {
    key: 1,
    restaurant: 'Restaurant 1',
    image: '/static/assets/burgers.jpg',
    description: 'Nice good food',
  },
  {
    key: 2,
    restaurant: 'Restaurant 2',
    image: '/static/assets/burgers.jpg',
    description: 'Nice good food',
  },
  {
    key: 3,
    restaurant: 'Restaurant 3',
    image: '/static/assets/burgers.jpg',
    description: 'Nice good food',
  },
];

function RestaurantCards() {
  const dispatch = useDispatch();

  const retrieveRestaurantData = useSelector(
    (state) => state.retrieveRestaurantReducer,
  );
  const {
    loading, error, restaurants, mazel,
  } = retrieveRestaurantData;

  useEffect(() => {
    dispatch(retrieveRestaurants());
  }, [dispatch]);

  return (
    <div className="p-5 my-5">
      <h2>Check out these restaurants!</h2>
      <Row>
        {data.map((site) => (
          <Col sm={4} className="mb-3">
            <Card className="h-100">
              <Card.Body className="py-2 text-center">
                <Image fluid src={site.image} />
                <h3>{site.restaurant}</h3>
                <p>{site.description}</p>
              </Card.Body>
              <Card.Footer className="py-2 text-center">
                <Button>View Restaurant</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RestaurantCards;
