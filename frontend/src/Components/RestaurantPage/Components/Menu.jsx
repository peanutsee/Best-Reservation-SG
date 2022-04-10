/* eslint-disable react/prop-types */
import React from 'react';

function Menu(props) {
  const { menu } = props;
  return (
    <>
      <p>menustuff</p>
      <p>{menu.menu_item_name}</p>
    </>
  );
}

export default Menu;
