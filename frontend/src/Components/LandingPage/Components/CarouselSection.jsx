/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

function CarouselSection() {
  return (
    <Carousel class="h-10">
      <Carousel.Item interval={2000}>
        <Image fluid className="w-100" src="/static/assets/1.png" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image fluid className="w-100" src="/static/assets/2.png" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image fluid className="w-100" src="/static/assets/3.png" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;
