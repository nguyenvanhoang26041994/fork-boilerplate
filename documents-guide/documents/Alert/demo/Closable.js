import React from 'react';
import { PureAlert } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="w-full">
      <PureAlert
        info
        title="Info Title"
        className="mb-5"
        closable={false}
      />
    </div>
  );
};

export default Demo;