/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

function CarouselSection() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <Image fluid className="w-100" src="/static/assets/restaurant1.jpg" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image fluid className="w-100" src="/static/assets/restaurant2.jpg" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;
