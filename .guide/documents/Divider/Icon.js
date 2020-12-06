import React from 'react';
import { Divider } from '@fork-ui/components/core';
import { Power, Copy, Messages } from '@fork-ui/components/icons';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider title={<Power />} />
      <Divider dashed title={<Copy />} />
      <Divider dotted title={<Messages />} />
    </div>
  );
};

export default Demo;
