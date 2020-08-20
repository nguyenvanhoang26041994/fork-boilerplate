import React from 'react';
import { InputNumber } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <InputNumber
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
