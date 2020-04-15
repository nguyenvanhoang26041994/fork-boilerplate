import React from 'react';
import { Textbox } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Textbox
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
