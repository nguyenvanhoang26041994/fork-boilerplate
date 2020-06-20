import React from 'react';
import { Loader } from '@/fork-ui/core';

const Demo = () => {
  return (
    <div className="flex">
      <Loader.Dots className="mr-10" />
      <Loader.Dots color="red" className="mr-10" />
      <Loader.Dots size="2rem" />
    </div>
  );
};

export default Demo;
