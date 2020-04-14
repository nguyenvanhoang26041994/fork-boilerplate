import React from 'react';
import { Carousel, Icon, Badge } from '@/components';

const listProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Demo = () => {
  return (
    <Carousel single>
      {listProduct.map(id => (
        <Carousel.Item key={id} className="neumorphism--500">
          <div
            className="flex flex-col items-center justify-center"
            style={{
              borderRadius: '1rem',
              height: '20rem',
              minWidth: '16rem',
            }}
          >
            <Badge count={id}>
              <Icon name="messages" size="5rem" />
            </Badge>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Demo;

Demo.header = 'SINGLE';
Demo.href = 'carousel-single';
Demo.code = `import React from 'react';
import { Carousel, Icon, Badge } from '@/components';

const listProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Demo = () => {
  return (
    <Carousel single>
      {listProduct.map(id => (
        <Carousel.Item key={id} className="neumorphism--500">
          <div
            className="flex flex-col items-center justify-center"
            style={{
              borderRadius: '1rem',
              height: '20rem',
              minWidth: '16rem',
            }}
          >
            <Badge count={id}>
              <Icon name="messages" size="5rem" />
            </Badge>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Demo;
`;
