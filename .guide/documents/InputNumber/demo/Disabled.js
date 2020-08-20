import React from 'react';
import { InputNumber } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <InputNumber
      disabled
      defaultValue={10}
      placeholder="The placeholder"
    />
  );
};

export default Demo;
