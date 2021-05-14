import React from 'react';
import { Menu } from '@fork-ui/components/core';
import Message from '@fork-ui/components/icons/all/Message';
import Heart from '@fork-ui/components/icons/all/Heart';
import Star from '@fork-ui/components/icons/all/Star';
import Bell from '@fork-ui/components/icons/all/Bell';
import Tool from '@fork-ui/components/icons/all/Tool';
import Power from '@fork-ui/components/icons/all/Power';
import Copy from '@fork-ui/components/icons/all/Copy';
import Dots from '@fork-ui/components/icons/all/Dots';

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
