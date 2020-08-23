import React from 'react';
import { Carousel } from '@@/fork-ui/src/components/core';
import DemoContent from '@@/.guide/shared/DemoContent';

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Demo = () => {
  const [props] = Carousel.useCarousel({
    loop: true,
    maxValue: list.length - 1,
  });

  return (
    <Carousel {...props}>
    {list.map(id => (
      <Carousel.Item key={id}>
        <DemoContent />
      </Carousel.Item>
    ))}
    </Carousel>
  );
};

export default Demo;
