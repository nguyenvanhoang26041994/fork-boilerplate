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

Demo.code = `
import React from 'react';
import { Breadcrumb, Icon } from '@/components/core';

export default () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item title={<Icon name="home" />} />
      <Breadcrumb.Item title={<Icon name="device-desktop" />} />
      <Breadcrumb.Item title="Breadcrumb" />
    </Breadcrumb>
  );
};
`;

export default Demo;
