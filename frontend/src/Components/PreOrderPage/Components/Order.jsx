import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Bill from './Bill';
import Menu from './Menu';
import OrderItemList from './OrderItemList';

function Order() {
  const params = useParams();
  return (
    <Container className="py-5 my-5">
      <h1 className="text-left">
        <strong>
          Order #ID:
          {' '}
          {params.id}
        </strong>
      </h1>

    </Container>
  );
}

export default Order;
