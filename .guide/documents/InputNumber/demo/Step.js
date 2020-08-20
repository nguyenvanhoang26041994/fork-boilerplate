import React from 'react';
import { InputNumber } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <InputNumber
      step={10}
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
