import React from 'react';
import { Textarea } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Textarea
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
