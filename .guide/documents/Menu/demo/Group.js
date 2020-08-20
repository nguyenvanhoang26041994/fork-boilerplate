import React from 'react';
import { Menu } from '@@/fork-ui/src/components/core';
import { Message, Heart, Tool, Star, Bell, Copy } from '@@/fork-ui/src/components/icons';

const Demo = () => {
  return (
    <Menu>
      <Menu.ItemGroup key="group-action" title="Action">
        <Menu.Item key="copy" icon={<Copy />} title="Copy" />
        <Menu.Item key="tool" icon={<Tool />} title="Config" />
        <Menu.Item
          key="message"
          icon={<Message />}
          title="Message"
        />
        <Menu.Item key="heart" icon={<Heart />} title="Love" />
      </Menu.ItemGroup>
      <Menu.ItemGroup key="group-other" title="Other">
        <Menu.Item key="rating" icon={<Star />} title="Rating" />
        <Menu.Item key="follow" icon={<Bell />} title="Follow" />
      </Menu.ItemGroup>
    </Menu>
  );
};

export default Demo;
