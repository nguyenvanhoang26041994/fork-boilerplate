import React from 'react';
import { Badge } from '@/rc-neumorphism/core';

const FancyBox = ({ size }) => (
  <div
    className="neumorphism--500"
    style={{ height: size, width: size }}
  />
);

const Demo = () => {
  return (
    <div className="flex">
      <Badge count={7} className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge count={999}>
        <FancyBox size="50px" />
      </Badge>
    </div>
  );
};

export default Demo;
