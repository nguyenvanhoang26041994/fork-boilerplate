import React from 'react';
import { Skeleton } from '@/fork-ui/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Skeleton p w='70%' />
      <Skeleton p w='40%' />
      <Skeleton p w='70%' />
      <Skeleton p w='90%' />
    </div>
  );
};

export default Demo;