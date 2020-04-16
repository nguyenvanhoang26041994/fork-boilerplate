import React from 'react';
import { Skeleton } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Skeleton circle />
      <Skeleton circle size="3rem" />
    </div>
  );
};

export default Demo;
