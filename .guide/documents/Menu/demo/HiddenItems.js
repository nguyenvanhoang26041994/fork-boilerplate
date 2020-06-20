import React from 'react';
import { Menu } from '@/fork-ui/core';

const Demo = () => {
  return (
    <Menu hiddenKeys={['option-2', 'option-3']}>
      <Menu.Item key="option-1" title="Option One" />
      <Menu.Item key="option-2" title="Option Two" />
      <Menu.Item key="option-3" title="Option Three" />
      <Menu.Item key="option-4" title="Option Four" />
    </Menu>
  );
};

export default Demo;
