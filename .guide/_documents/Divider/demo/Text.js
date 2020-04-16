import React from 'react';
import { Divider } from '@/rc-neumorphism/core';

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
Demo.header = 'TEXT';
Demo.anchorTitle = 'Text';
Demo.href = 'divider-text';

Demo.code = `import React from 'react';
import { Divider } from 'rc-neumorphism/core';

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
`;
