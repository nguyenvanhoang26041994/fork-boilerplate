import React from 'react';
import { Divider, Icon } from '@/fork-ui/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider title={<Icon name="power" />} />
      <Divider dashed title={<Icon name="copy" />} />
      <Divider dotted title={<Icon name="messages" />} />
    </div>
  );
};

export default Demo;
