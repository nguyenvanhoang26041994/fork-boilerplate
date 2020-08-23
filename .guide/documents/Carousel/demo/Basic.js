import React from 'react';
import { Carousel } from '@@/fork-ui/src/components/core';
import DemoContent from '@@/.guide/shared/DemoContent';

const listProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Demo = () => {
  return (
    <Carousel loop>
      {listProduct.map(id => (
        <Carousel.Item key={id}>
          <DemoContent />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Demo;
