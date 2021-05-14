import React from 'react';
import { Menu } from '@fork-ui/components/core';
import Message from '@fork-ui/components/icons/all/Message';
import Heart from '@fork-ui/components/icons/all/Heart';
import Tool from '@fork-ui/components/icons/all/Tool';
import Copy from '@fork-ui/components/icons/all/Copy';

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
