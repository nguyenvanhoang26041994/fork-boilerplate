import React from 'react';
import { Skeleton } from '@/fork-ui/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Skeleton rect />
      <Skeleton rect w="50%" />
      <Skeleton rect w="70%" />
      <Skeleton rect h="10rem" />
    </div>
  );
};

export default Demo;
