import React from 'react';
import { Menu } from '@/components';

const Demo = () => {
  return (
    <Menu>
      <Menu.Item key="copy" icon="copy" title="Copy" />
      <Menu.Item key="tool" icon="tool" title="Config" />
      <Menu.Item
        key="message"
        icon="message"
        title="Message"
      />
      <Menu.Item key="heart" icon="heart" title="Love" />
    </Menu>
  );
};

Demo.code = `
import React from 'react';
import { Menu } from '@/components/core';

export default () => {
  return (
    <Menu>
      <Menu.Item key="copy" icon="copy" title="Copy" />
      <Menu.Item key="tool" icon="tool" title="Config" />
      <Menu.Item
        key="message"
        icon="message" title="message"
      />
      <Menu.Item key="heart" icon="heart" title="Love" />
    </Menu>
  );
};
`;

export default Demo;
