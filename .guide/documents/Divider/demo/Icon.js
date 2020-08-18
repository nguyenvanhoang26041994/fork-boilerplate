import React from 'react';
import { Divider } from '@/fork-ui/core';
import { Power, Copy, Messages } from '@@/fork-ui/src/components/Icon';

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
