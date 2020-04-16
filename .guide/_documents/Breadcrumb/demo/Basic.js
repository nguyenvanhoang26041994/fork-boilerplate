import React from 'react';
import { Breadcrumb } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item title="Home"/>
      <Breadcrumb.Item title="Components"/>
      <Breadcrumb.Item title="Breadcrumb"/>
    </Breadcrumb>
  );
};

export default Demo;
Demo.header = 'BASIC';
Demo.anchorTitle = 'Basic';
Demo.href = 'breadcrumb-basic';

Demo.code = `import React from 'react';
import { Breadcrumb } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item title="Home"/>
      <Breadcrumb.Item title="Components"/>
      <Breadcrumb.Item title="Breadcrumb"/>
    </Breadcrumb>
  );
};

export default Demo;
`;
