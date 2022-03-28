/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function RestaurantPaginator({ pages, page }) {
  if (pages > 1 && pages < 10) {
    return (
      <Pagination className="shadow shadow-100">
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer key={x + 1} to={`/?page=${x + 1}`}>
            <Pagination.Item
              active={x + 1 === page}
            >
              {x + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    );
  }

  const [currentPage, setCurrentPage] = useState(1);

  const createPaginationItem = (x) => (
    <LinkContainer key={x} to={`/?page=${x}`}>
      <Pagination.Item
        active={x === page}
      >
        {x}
      </Pagination.Item>
    </LinkContainer>
  );

  const paginationItems = [];
  // Add the first item (page 1)
  paginationItems.push(createPaginationItem(1));
  // Add an ellipsis
  paginationItems.push(<Pagination.Ellipsis />);
  const midpoint = pages / 2;
  // Create page numbers in the middle
  for (let i = midpoint; i <= midpoint + 4; i += 1) {
    paginationItems.push(createPaginationItem(i));
  }
  // Add an ellipsis
  paginationItems.push(<Pagination.Ellipsis />);
  // Add the last item (page N)
  paginationItems.push(createPaginationItem(pages));

  return (
    <Pagination className="paginationInfo">
      <Pagination.Prev
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {paginationItems}
      <Pagination.Next
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pages}
      />
    </Pagination>
  );
}
export default RestaurantPaginator;
