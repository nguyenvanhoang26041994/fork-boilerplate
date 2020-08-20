import React from 'react';
import { Textbox } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Textbox
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
