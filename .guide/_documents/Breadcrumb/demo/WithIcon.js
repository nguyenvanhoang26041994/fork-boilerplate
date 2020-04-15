import React from 'react';
import { Breadcrumb, Icon } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item title={<Icon name="home" />} />
      <Breadcrumb.Item title={<Icon name="device-desktop" />} />
      <Breadcrumb.Item title="Breadcrumb" />
    </Breadcrumb>
  );
};

export default Demo;
Demo.header = 'With Icon';
Demo.href = 'breadcrumb-with-icon';

Demo.code = `import React from 'react';
import { Breadcrumb, Icon } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item title={<Icon name="home" />} />
      <Breadcrumb.Item title={<Icon name="device-desktop" />} />
      <Breadcrumb.Item title="Breadcrumb" />
    </Breadcrumb>
  );
};

export default Demo;
`;
