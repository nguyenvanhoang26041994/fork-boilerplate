import React from 'react';
import { Slider } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Slider defaultValue={77} />
    </div>
  );
};

export default Demo;
