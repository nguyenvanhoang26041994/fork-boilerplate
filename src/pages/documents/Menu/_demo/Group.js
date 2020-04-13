import React from 'react';
import { Menu } from '@/components';

const Demo = () => {
  return (
    <Menu>
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
    </Menu>
  );
};

export default Demo;

Demo.header = 'GROUP';
Demo.href = 'menu-group';
Demo.code = `import React from 'react';
import { Menu } from '@/components';

const Demo = () => {
  return (
    <Menu>
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
    </Menu>
  );
};

export default Demo;
`;
