/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Row,
  Col,
  FormControl,
  Button,
  InputGroup,
  Spinner,
  Alert,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../Redux/actions';

function MenuItem(props) {
  const { menu_item, order_id } = props;
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const preOrderItem = useSelector((state) => state.addPreOrderItemReducer);
  const { loading, error, success } = preOrderItem;

  const handleAddOrder = () => {
    dispatch(addItem(order_id, menu_item.id, count));
  };

  return (
    <Row className="mb-4">
      <Col md={8}>
        <h5>{menu_item.menu_item_name}</h5>
        <p className="small">{menu_item.menu_item_description}</p>
      </Col>
      <Col md={1} className="d-flex justify-content-end">
        {menu_item.menu_item_price}
      </Col>
      <Col md={3} className="d-flex justify-content-end h-50">
        <InputGroup>
          <FormControl
            className="text-center"
            size="smaller-input"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          {Number(count) !== 0 && !loading && !success && (
            <Button
              variant="outline-secondary"
              id="button-addon"
              onClick={handleAddOrder}
            >
              Add Order
            </Button>
          )}
          {count !== 0 && loading && !success && <Spinner animation="border" />}
          {count !== 0 && !loading && success && <Alert alert="success">&#10003;</Alert>}
        </InputGroup>
      </Col>
    </Row>
  );
}

export default MenuItem;
