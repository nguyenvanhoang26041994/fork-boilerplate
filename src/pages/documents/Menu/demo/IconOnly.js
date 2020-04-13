import React from 'react';
import { Menu } from '@/components';

const Demo = () => {
  return (
    <Menu iconOnly>
      <Menu.ItemGroup key="group-action" title="Action">
        <Menu.Item key="copy" icon="copy" title="Copy" />
        <Menu.Item key="tool" icon="tool" title="Config" />
        <Menu.Item
          key="message"
          icon="message"
          title="Message"
        />
        <Menu.Item key="heart" icon="heart" title="Love" />
      </Menu.ItemGroup>
      <Menu.ItemGroup key="group-other" title="Other">
        <Menu.Item key="rating" icon="star" title="Rating" />
        <Menu.Item key="follow" icon="bell" title="Follow" />
      </Menu.ItemGroup>
      <Menu.Sub key="sub-order" title="Order" icon="dots">
        <Menu.Item key="alarm" icon="alarm" title="Alarm" />
        <Menu.Item
          key="break-down"
          icon="caret-down"
          title="Break down"
        />
      </Menu.Sub>
    </Menu>
  );
};

export default Demo;
