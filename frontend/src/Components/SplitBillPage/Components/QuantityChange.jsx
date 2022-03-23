/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

function QuantityChange(props) {
  const { item, setQuantity, quantity } = props;

  const increaseQuantity = () => {
    if (quantity < item.order_item_qty) {
      setQuantity(Number(quantity) + 1);
    }
  };
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(Number(quantity) - 1);
    }
  };
  return (
    <InputGroup className="mb-3">
      <Button variant="outline-secondary" id="button-addon1" onClick={decreaseQuantity}>
        -
      </Button>
      <FormControl
        className="text-center"
        size="smaller-input"
        value={quantity}
      />
      <Button variant="outline-secondary" id="button-addon1" onClick={increaseQuantity}>
        +
      </Button>
    </InputGroup>
  );
}

export default QuantityChange;
