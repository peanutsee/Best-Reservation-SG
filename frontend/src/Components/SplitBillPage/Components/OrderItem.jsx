/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import QuantityChange from './QuantityChange';

function OrderItem(props) {
  const {
    key, item, proportion, setProportion,
  } = props;

  const [quantity, setQuantity] = useState(0);

  //   TODO: SET PROPORTIONS

  return (
    <tr key={key}>
      <td>{item.order_item_name}</td>
      <td>
        $
        {' '}
        {item.order_item_price}
      </td>
      <td>
        <QuantityChange
          item={item}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </td>
    </tr>
  );
}

export default OrderItem;
