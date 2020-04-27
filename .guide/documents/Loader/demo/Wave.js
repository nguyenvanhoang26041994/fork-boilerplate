import React from 'react';
import { Loader } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Loader.Wave className="mr-10" />
      <Loader.Wave color="red" className="mr-10" />
      <Loader.Wave size="2rem" />
    </div>
  );
};

export default Demo;
