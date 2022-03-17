/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { retrieveRestaurants } from '../Redux/actions';
import RestaurantCardModel from './RestaurantCardModel';
import RestaurantPaginator from './RestaurantPaginator';

function Restaurants() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const retrieveRestaurantData = useSelector(
    (state) => state.retrieveRestaurantReducer,
  );
  const {
    loading, error, restaurants, page, pages,
  } = retrieveRestaurantData;

  const keyword = searchParams.get('page') || '';
  useEffect(() => {
    dispatch(retrieveRestaurants(keyword));
  }, [dispatch, keyword]);

  // TODO: SEARCH BAR FILTER
  // TODO: LOAD AND SIZE THUMBNAIL FOR RESTAURANTS (DEFAULT OR GIVEN)
  return (
    <div className="p-5 my-5">
      <h2 className="mb-5">Check out these restaurants!</h2>
      {loading ? (
        <p className="text-center">Loading Restaurants...</p>
      ) : error ? (
        <p className="text-center">Error Loading Restaurants...</p>
      ) : (
        <>
          <Row>
            {restaurants.map((restaurant, key) => (
              <Col key={key} sm={3} className="mb-3">
                <RestaurantCardModel restaurant={restaurant} />
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-center align-middle">
            <RestaurantPaginator page={page} pages={pages} />
          </div>
        </>
      )}
    </div>
  );
}

export default Restaurants;
