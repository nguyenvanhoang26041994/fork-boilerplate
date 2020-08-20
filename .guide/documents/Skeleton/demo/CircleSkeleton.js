import React from 'react';
import { Skeleton } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Skeleton circle />
      <Skeleton circle size="3rem" />
    </div>
  );
};

export default Demo;
