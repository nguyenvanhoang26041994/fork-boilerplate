import React from 'react';
import { Divider } from '@fork-ui/components/core';
import { Power, Copy } from '@fork-ui/components/icons';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider left dashed title={<Power />} />
      <Divider left title="LEFT TITLE" />
      <Divider right dashed title={<Copy />} />
      <Divider
        right
        dashed
        title={(
          <span>
            <Copy className="mr-3" />
            RIGHT TITLE
          </span>
        )}
      />
    </div>
  );
};

export default Demo;
