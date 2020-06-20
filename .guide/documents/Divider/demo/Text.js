import React from 'react';
import { Divider } from '@/fork-ui/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider title="DIVIDER TITLE" />
      <Divider dashed title="DIVIDER TITLE" />
      <Divider dotted title="DIVIDER TITLE" />
    </div>
  );
};

export default Demo;
