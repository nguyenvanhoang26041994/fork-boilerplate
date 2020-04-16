import React from 'react';
import { Loader } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Loader.Spinner className="mr-10" />
      <Loader.Spinner color="red" className="mr-10" />
      <Loader.Spinner size="2rem" />
    </div>
  );
};

export default Demo;
