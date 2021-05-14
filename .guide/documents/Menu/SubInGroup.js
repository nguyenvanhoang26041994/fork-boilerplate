import React from 'react';
import { Menu } from '@fork-ui/components/core';
import Message from '@fork-ui/components/icons/all/Message';
import Heart from '@fork-ui/components/icons/all/Heart';
import Star from '@fork-ui/components/icons/all/Star';
import Bell from '@fork-ui/components/icons/all/Bell';
import Share from '@fork-ui/components/icons/all/Share';
import Tool from '@fork-ui/components/icons/all/Tool';
import Copy from '@fork-ui/components/icons/all/Copy';

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
