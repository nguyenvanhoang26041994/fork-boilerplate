import React from 'react';
import { Loader } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Loader.Dot wave className="mr-10" />
      <Loader.Dot wave color="red" className="mr-10" />
      <Loader.Dot wave size="2rem" />
    </div>
  );
};

export default Demo;
