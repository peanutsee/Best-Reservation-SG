/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import {
  Card, Row, Col, Image,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveRestaurants } from '../Redux/actions';

const data = [
  {
    key: 1,
    website: 'Restaurant 1',
    image: '/static/assets/burgers.jpg',
  },
  {
    key: 2,
    website: 'Restaurant 2',
    image: '/static/assets/burgers.jpg',
  },
  {
    key: 3,
    website: 'Restaurant 3',
    image: '/static/assets/burgers.jpg',
  },
];

function RestaurantCards() {
  const dispatch = useDispatch();

  const retrieveRestaurantData = useSelector((state) => state.retrieveRestaurantReducer);
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
          <Col sm={4}>
            <a href={site.url}>
              <Card className="h-100">
                <Card.Body>
                  <div className="d-flex justify-content-center">
                    <Image fluid src={site.image} />
                  </div>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RestaurantCards;
