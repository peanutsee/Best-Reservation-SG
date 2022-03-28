import React from 'react';
import {
  Row, Col, Container, Button,
} from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

import Menu from './Menu';
import Bill from './Bill';
import OrderItemList from './OrderItemList';

function Order() {
  const params = useParams();

  return (
    <Container className="py-5 my-5">
      <h1 className="text-left">
        <strong>
          Pre Order #ID:
          {' '}
          {params.id}
        </strong>
      </h1>
      <Row>
        <Col md={8}>
          <OrderItemList />
        </Col>
        <Col md={4}>
          <Bill />

          {/* Menu Modal */}
          <Menu />

          {/* Link to Payment  */}
          <Button>
            <Link to={`/payment/${params.id}`}>Make Payment</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Order;
