import React from 'react';
import { Number } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Number
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
