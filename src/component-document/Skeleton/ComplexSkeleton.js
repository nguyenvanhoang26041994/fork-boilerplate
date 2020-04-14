import React from 'react';
import { Skeleton } from '@/components';

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-start">
      <Skeleton circle className="mb-2" />
      <Skeleton rect className="mb-2" />
      <Skeleton rect w="50%" className="mb-2" />
      <Skeleton rect w="70%" className="mb-2" />
    </div>
  );
};

export default Demo;
