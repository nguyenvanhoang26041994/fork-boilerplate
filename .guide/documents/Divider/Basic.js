import React from 'react';
import { Divider } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider />
      <Divider dashed />
      <Divider type="dashed" />
      <Divider dotted />
      <Divider transparent />
    </div>
  );
};

export default Demo;
