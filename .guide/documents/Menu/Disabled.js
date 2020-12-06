import React from 'react';
import { Menu } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Menu>
      <Menu.Item key="option-1" title="Option One" />
      <Menu.Item
        key="option-2"
        disabled
        title="Disabled Option"
      />
      <Menu.Item key="option-3" title="Option Three" />
      <Menu.Item key="option-4" title="Option Four" />
    </Menu>
  );
};

export default Demo;
