import React from 'react';
import { Avatar } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Avatar name="Hoàng Nguyễn" className="mr-3" />
      <Avatar
        name="Hoàng Nguyễn"
        className="mr-3"
        color="orange"
      />
      <Avatar
        name="Hoàng Nguyễn"
        className="mr-3"
        color="#19b39d"
      />
      <Avatar name="Hoàng Nguyễn" square />
    </div>
  );
};

export default Demo;