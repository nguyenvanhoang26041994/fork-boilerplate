import React  from 'react';
import { Skeleton } from '@/fork-ui/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Skeleton circle />
      <Skeleton rect />
      <Skeleton rect w="70%" />
      <Skeleton rect h="10rem" />
      <Skeleton circle size="3rem" />
      <Skeleton p w="90%" />
    </div>
  );
};

export default Demo;
