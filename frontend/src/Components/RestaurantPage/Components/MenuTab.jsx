/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from 'react-bootstrap';

function MenuTab(props) {
  const { menu } = props;
  return (
    <Container className="p-3">
      <h3 style={{ textAlign: 'center' }}>Restaurant Menu</h3>
      {menu.map((menu_item, index) => (
        <p style={{ textAlign: 'center' }}>
          {menu_item.menu_item_name}
          <br />
          {menu_item.menu_item_description}
          {' '}
          SGD
          {' '}
          {menu_item.menu_item_price}
        </p>
      ))}
    </Container>
  );
}

export default MenuTab;
