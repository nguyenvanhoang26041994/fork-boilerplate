import React from 'react';
import { Menu } from '@fork-ui/components/core';
import { Message, Heart, Star, Bell, Share, Tool, Copy } from '@fork-ui/components/icons';

const Demo = () => {
  return (
    <Menu>
      <Menu.ItemGroup key="group-action" title="Action">
        <Menu.Item key="copy" icon={<Copy />} title="Copy" />
        <Menu.Item key="tool" icon={<Tool />} title="Config" />
        <Menu.Sub key="sub-other" icon={<Share />} title="Other">
          <Menu.Item key="rating" icon={<Star />} title="Rating" />
          <Menu.Item key="follow" icon={<Bell />} title="Follow" />
        </Menu.Sub>
        <Menu.Item
          key="message"
          icon={<Message />}
          title="Message"
        />
        <Menu.Item key="heart" icon={<Heart />} title="Love" />
      </Menu.ItemGroup>
    </Menu>
  );
};

export default Demo;
