/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import {
  Row, Col, Container, Button, Alert,
} from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './Menu';
// import Bill from './Bill';
import OrderItemList from './OrderItemList';
import { getPreOrderDetails } from '../Redux/actions';

function Order() {
  const params = useParams();
  const dispatch = useDispatch();

  const preOrder = useSelector((state) => state.retrievePreOrderReducer);
  const { loading, error, pre_order_details } = preOrder;

  const deleteItem = useSelector((state) => state.removePreOrderItemReducer);
  const { success: deleteSuccess, error: deleteError } = deleteItem;

  useEffect(() => {
    dispatch(getPreOrderDetails(params.id));
  }, []);

  return (
    <Container className="py-5 my-5">
      {loading ? (
        <h1 className="text-center">
          Loading Order Details for Order #:
          {' '}
          {params.id}
        </h1>
      ) : error ? (
        <h1 className="text-center">
          Error Loading Order Details for Order #:
          {' '}
          {params.id}
        </h1>
      ) : (
        <>
          <h1 className="text-left">
            <strong>
              Pre Order #ID:
              {' '}
              {params.id}
            </strong>
          </h1>
          {deleteSuccess && (
            <Alert variant="success">Item Deleted Successfully!</Alert>
          )}
          {deleteError && (
            <Alert variant="danger">Item Deleted Not Successfully!</Alert>
          )}
          {pre_order_details && (
            <OrderItemList pre_order_details={pre_order_details} />
          )}
          <Row>
            <Col md={10}>
              {pre_order_details && (
                <Menu restaurant_id={pre_order_details.restaurant_id} />
              )}
            </Col>
            <Col md={2} className="d-flex justify-content-end">
              <div>
                <Link to={`/payment/${params.id}`}>
                  <Button className="btn btn-primary mt-2">
                    Make Payment
                    {' '}
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Order;
