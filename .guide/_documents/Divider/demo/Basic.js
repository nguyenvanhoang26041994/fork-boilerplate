import React from 'react';
import { Divider } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider />
      <Divider dashed />
      <Divider type="dashed" />
      <Divider dotted />
      <Divider transparent />
    </div>
  );
};

export default Demo;
Demo.header = 'BASIC';
Demo.anchorTitle = 'Basic';
Demo.href = 'divider-basic';

Demo.code = `import React from 'react';
import { Divider } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider />
      <Divider dashed />
      <Divider type="dashed" />
      <Divider dotted />
      <Divider transparent />
    </div>
  );
};

export default Demo;
`;
