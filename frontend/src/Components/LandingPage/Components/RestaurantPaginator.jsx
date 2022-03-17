/* eslint-disable react/prop-types */
import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function RestaurantPaginator({ pages, page }) {
  return (
    pages > 1 && (
      <Pagination className="shadow shadow-100">
          {[...Array(pages).keys()].map((x) => (
            <LinkContainer key={x + 1} to={`/?page=${x + 1}`}>
              <Pagination.Item className="border border-primary" active={x + 1 === page}>{x + 1}</Pagination.Item>
            </LinkContainer>
          ))}
      </Pagination>
    )
  );
}

export default RestaurantPaginator;
