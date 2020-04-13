import React from 'react';
import { Carousel, Icon } from '@/components';

const listProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Demo = () => {
  return (
    <Carousel>
      {listProduct.map(id => (
        <Carousel.Item key={id}>
          <div
            className="neumorphism flex items-center justify-center p-2 m-1"
            style={{
              borderRadius: '1rem',
              height: '20rem',
              width: '16rem',
            }}
          >
          <Icon name="comments" fontSize="5rem" />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Demo;
