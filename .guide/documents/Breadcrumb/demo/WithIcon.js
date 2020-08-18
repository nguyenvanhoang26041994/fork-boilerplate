import React from 'react';
import { Breadcrumb } from '@/fork-ui/core';
import { Home, DeviceDesktop } from '@@/fork-ui/src/components/Icon';

const Demo = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item title={<Home />} />
      <Breadcrumb.Item title={<DeviceDesktop />} />
      <Breadcrumb.Item title="Breadcrumb" />
    </Breadcrumb>
  );
};

export default Demo;
