import React from 'react';
import { PureAlert } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="w-full">
      <PureAlert
        info
        title="Semantic Title"
        className="mb-5"
      />
      <PureAlert
        type="info"
        title="Formal Title"
        className="mb-5"
      />
    </div>
  );
};

export default Demo;
