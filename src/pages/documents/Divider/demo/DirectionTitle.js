import React from 'react';
import { Divider, Icon } from '@/components';

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

Demo.code = `
import React from 'react';
import { Divider, Icon } from '@/components/core';

export default () => {
  return (
    <div className="w-full">
      <Divider dashed left title={<Icon name="power" />} />
      <Divider direction="left" title="LEFT TITLE" />
      <Divider dashed right title={<Icon name="copy" />} />
      <Divider
        type="dashed"
        direction="right"
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
`;

export default Demo;
