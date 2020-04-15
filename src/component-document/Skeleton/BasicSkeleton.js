import React from 'react';
import { Skeleton } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-start">
      <Skeleton p w='70%' />
      <Skeleton p w='40%' />
      <Skeleton p w='70%' />
      <Skeleton p w='90%' />
    </div>
  );
};

export default Demo;