import React, { useState } from 'react';
import { Slider } from '@/rc-neumorphism/core';

const Demo = () => {
  const [dots] = useState([10,30, 50, 80, 96]);

  return (
    <div className="flex flex-col w-full">
      <Slider dots={dots} defaultValue={77} />
    </div>
  );
};

export default Demo;
