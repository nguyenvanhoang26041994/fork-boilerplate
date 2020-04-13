import React from 'react';
import { Menu } from '@/components';

const Demo = () => {
  return (
    <Menu>
      <Menu.Sub key="sub-action" title="Action" icon="dots">
        <Menu.Item
          key="copy"
          icon="copy"
          title="Copy"
        />
        <Menu.Item
          key="tool"
          icon="tool"
          title="Config"
        />
        <Menu.Item
          key="message"
          icon="message"
          title="Message"
        />
        <Menu.Item
          key="heart"
          icon="heart"
          title="Love"
        />
      </Menu.Sub>
      <Menu.Sub
        key="sub-other"
        title="Other"
        icon="power"
      >
        <Menu.Item
          key="rating"
          icon="star"
          title="Rating"
        />
        <Menu.Item
          key="follow"
          icon="bell"
          title="Follow"
        />
      </Menu.Sub>
    </Menu>
  );
};

export default Demo;

Demo.header = 'SUB';
Demo.href = 'menu-sub';
Demo.code = `import React from 'react';
import { Menu } from '@/components';

const Demo = () => {
  return (
    <Menu>
      <Menu.Sub key="sub-action" title="Action" icon="dots">
        <Menu.Item
          key="copy"
          icon="copy"
          title="Copy"
        />
        <Menu.Item
          key="tool"
          icon="tool"
          title="Config"
        />
        <Menu.Item
          key="message"
          icon="message"
          title="Message"
        />
        <Menu.Item
          key="heart"
          icon="heart"
          title="Love"
        />
      </Menu.Sub>
      <Menu.Sub
        key="sub-other"
        title="Other"
        icon="power"
      >
        <Menu.Item
          key="rating"
          icon="star"
          title="Rating"
        />
        <Menu.Item
          key="follow"
          icon="bell"
          title="Follow"
        />
      </Menu.Sub>
    </Menu>
  );
};

export default Demo;
`;
