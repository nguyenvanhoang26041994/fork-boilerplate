import React from 'react';
import { Slider } from '@/fork-ui/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Slider defaultValue={[11, 50]} />
    </div>
  );
};

export default Demo;
