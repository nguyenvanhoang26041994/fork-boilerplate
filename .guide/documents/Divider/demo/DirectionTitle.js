import React from 'react';
import { Divider, Icon } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider left dashed title={<Icon name="power" />} />
      <Divider left title="LEFT TITLE" />
      <Divider right dashed title={<Icon name="copy" />} />
      <Divider
        right
        dashed
        title={(
          <span>
            <Icon name="copy" className="mr-3" />
            RIGHT TITLE
          </span>
        )}
      />
    </div>
  );
};

export default Demo;
