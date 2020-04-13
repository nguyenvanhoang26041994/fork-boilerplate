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

export default Demo;

Demo.header = 'DIRECTION TITLE';
Demo.href = 'divider-direction-title';
Demo.code = `import React from 'react';
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

export default Demo;
`;
