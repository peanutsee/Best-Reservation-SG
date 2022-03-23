/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import QuantityChange from './QuantityChange';

function OrderItem(props) {
  const { item, orderQty } = props;
  const { id, value } = item;

  const [qty, setQty] = useState(0);

  useEffect(() => {
    setQty(qty);
    orderQty[id] = qty;
  }, [qty]);

  return (
    <tr>
      <td>{value.order_item_name}</td>
      <td>
        $
        {' '}
        {value.order_item_price}
      </td>
      <td>
        <QuantityChange
          item={value}
          quantity={qty}
          setQuantity={setQty}
        />
      </td>
    </tr>
  );
}

export default OrderItem;
