import React from 'react';
import { Breadcrumb, Icon } from '@/components';

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

Demo.header = 'WITHICON';
Demo.href = 'breadcrumb-withicon';
Demo.code = `import React from 'react';
import { Breadcrumb, Icon } from '@/components';

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
