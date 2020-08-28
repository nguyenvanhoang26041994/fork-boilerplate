import React from 'react';
import { Menu, Flex } from '@@/fork-ui/src/components/core';
import Wrapper from '@@/.guide/shared/Wrapper';
import {
  Message,
  Heart,
  Tool,
  Copy,
  Brush,
  Filter,
  Dots,
} from '@@/fork-ui/src/components/icons';

const Demo = () => {
  return (
    <Wrapper span="2em" className="w-full">
      <div>
        <Menu>
          <Menu.Item key="copy" icon={<Copy />} title="Copy" />
          <Menu.Item key="disabled" disabled icon={<Brush />} title="Disabled" />
          <Menu.Item key="tool" icon={<Tool />} title="Config" />
          <Menu.Sub
            defaultExpanded
            key="sub-action"
            title="Action" icon={<Dots />}
          >
            <Menu.Item key="message" icon={<Message />} title="Message"/>
            <Menu.Item key="heart" icon={<Heart />} title="Love" />
          </Menu.Sub>
          <Menu.Item key="filter" icon={<Filter />} title="Filter" />
        </Menu>
      </div>
      <div>
        <Menu iconOnly>
          <Menu.Item key="copy" icon={<Copy />} title="Copy" />
          <Menu.Item key="disabled" disabled icon={<Brush />} title="Disabled" />
          <Menu.Item key="tool" icon={<Tool />} title="Config" />
          <Menu.Sub
            defaultExpanded
            key="sub-action"
            title="Action"
            icon={<Dots />}
          >
            <Menu.Item
              key="message"
              icon={<Message />}
              titleOnly
              title="Message"
            />
            <Menu.Item key="heart" icon={<Heart />} title="Love" />
          </Menu.Sub>
          <Menu.Item key="filter" icon={<Filter />} title="Filter" />
        </Menu>
      </div>
    </Wrapper>
  );
};

export default Demo;
