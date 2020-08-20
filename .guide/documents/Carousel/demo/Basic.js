import React from 'react';
import { Carousel, Badge } from '@@/fork-ui/src/components/core';
import { Messages } from '@@/fork-ui/src/components/icons';

const listProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Demo = () => {
  return (
    <Carousel>
      {listProduct.map(id => (
        <Carousel.Item key={id} className="neumorphism--500" style={{ borderRadius: '0.5rem' }}>
          <div
            className="flex flex-col items-center justify-center"
            style={{
              borderRadius: '1rem',
              height: '20rem',
              minWidth: '16rem',
            }}
          >
            <Badge count={id}>
              <Messages size="5rem" />
            </Badge>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Demo;
