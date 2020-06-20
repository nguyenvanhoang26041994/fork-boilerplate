import React from 'react';
import { Loader } from '@/fork-ui/core';

const Demo = () => {
  return (
    <div className="flex">
      <Loader.Dots wave className="mr-10" />
      <Loader.Dots wave color="red" className="mr-10" />
      <Loader.Dots wave size="2rem" />
    </div>
  );
};

export default Demo;
