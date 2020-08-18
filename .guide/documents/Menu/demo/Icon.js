import React from 'react';
import { Menu } from '@/fork-ui/core';
import { Message, Heart, Tool, Copy } from '@@/fork-ui/src/components/Icon';
const Demo = () => {
  return (
    <Menu>
      <Menu.Item key="copy" icon={<Copy />} title="Copy" />
      <Menu.Item key="tool" icon={<Tool />} title="Config" />
      <Menu.Item
        key="message"
        icon={<Message />}
        title="Message"
      />
      <Menu.Item key="heart" icon={<Heart />} title="Love" />
    </Menu>
  );
};

export default Demo;
