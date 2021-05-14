import React from 'react';
import { Breadcrumb } from '@fork-ui/components/core';
import Home from '@fork-ui/components/icons/all/Home';
import DeviceDesktop from '@fork-ui/components/icons/all/DeviceDesktop';

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
