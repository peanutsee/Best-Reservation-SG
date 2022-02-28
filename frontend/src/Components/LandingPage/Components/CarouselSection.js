/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

function CarouselSection() {
  return (
    <Carousel class="h-10">
      <Carousel.Item interval={1000}>
        <Image fluid className="w-100" src="/static/assets/dining.png" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Image fluid className="w-100" src="/static/assets/bill.png" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;
