/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import {
  Modal, Nav, Card, Row, Col, Image, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveRestaurants } from '../Redux/actions';
import RestaurantCardModel from './RestaurantCardModel';

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
            <RestaurantCardModel restaurant={site} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RestaurantCards;
