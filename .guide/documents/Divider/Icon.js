import React from 'react';
import { Divider } from '@fork-ui/components/core';
import Power from '@fork-ui/components/icons/all/Power';
import Copy from '@fork-ui/components/icons/all/Copy';
import Messages from '@fork-ui/components/icons/all/Messages';

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
