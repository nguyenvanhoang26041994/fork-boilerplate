import React from 'react';
import { Number } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Number
      min={5}
      max={10}
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
