import React from 'react';
import { Menu } from '@@/fork-ui/src/components/core';
import { Message, Heart, Star, Bell, Tool, Power, Copy, Dots } from '@@/fork-ui/src/components/icons';

const Demo = () => {
  return (
    <Menu>
      <Menu.Sub key="sub-action" title="Action" icon={<Dots />}>
        <Menu.Item
          key="copy"
          icon={<Copy />}
          title="Copy"
        />
        <Menu.Item
          key="tool"
          icon={<Tool />}
          title="Config"
        />
        <Menu.Item
          key="message"
          icon={<Message />}
          title="Message"
        />
        <Menu.Item
          key="heart"
          icon={<Heart />}
          title="Love"
        />
      </Menu.Sub>
      <Menu.Sub
        key="sub-other"
        title="Other"
        icon={<Power />}
      >
        <Menu.Item
          key="rating"
          icon={<Star />}
          title="Rating"
        />
        <Menu.Item
          key="follow"
          icon={<Bell />}
          title="Follow"
        />
      </Menu.Sub>
    </Menu>
  );
};

export default Demo;
