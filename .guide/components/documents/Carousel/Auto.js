import React from 'react';
import { Carousel } from '@fork-ui/components/core';
import DemoContent from '../../shared/DemoContent';

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Demo = () => {
  const [props] = Carousel.useCarousel({
    loop: true,
  });

  return (
    <Carousel auto={1000} {...props}>
      {list.map(id => (
        <Carousel.Item key={id}>
          <DemoContent />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Demo;
