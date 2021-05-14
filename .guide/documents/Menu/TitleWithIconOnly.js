import React, { useState } from 'react';
import { Menu, Switch } from '@fork-ui/components/core';
import Message from '@fork-ui/components/icons/all/Message';
import Heart from '@fork-ui/components/icons/all/Heart';
import Star from '@fork-ui/components/icons/all/Star';
import Bell from '@fork-ui/components/icons/all/Bell';
import CaretDown from '@fork-ui/components/icons/all/CaretDown';
import Tool from '@fork-ui/components/icons/all/Tool';
import Copy from '@fork-ui/components/icons/all/Copy';
import Dots from '@fork-ui/components/icons/all/Dots';
import Clock from '@fork-ui/components/icons/all/Clock';

const Demo = () => {
  const [isIconOnly, setIsIconOnly] = useState(true);
  return (
    <div
      className="flex flex-row items-end justify-start w-full"
      style={{ height: '40rem' }}
    >
      <div className="flex items-center mr-20">
        <Switch
          checked={isIconOnly}
          onChange={(e) => setIsIconOnly(e.target.checked)}
        />
        <span className="ml-3">Icon Only</span>
      </div>
      <Menu iconOnly={isIconOnly}>
        <Menu.ItemGroup key="group-action" title="Action">
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
          <Menu.Item key="heart" icon={<Heart />} title="Love" />
        </Menu.ItemGroup>
        <Menu.ItemGroup key="group-other" title="Other">
          <Menu.Item
            key="rating"
            icon={<Star />}
            titleOnly
            title="Rating"
          />
          <Menu.Item
            key="follow"
            icon={<Bell />}
            titleOnly
            title="Follow"
          />
        </Menu.ItemGroup>
        <Menu.Sub
          key="sub-order"
          title="Order"
          icon={<Dots />}
        >
          <Menu.Item
            key="alarm"
            icon={<Clock />}
            title="Alarm"
          />
          <Menu.Item
            key="break-down"
            icon={<CaretDown />}
            title="Break down"
          />
        </Menu.Sub>
      </Menu>
    </div>
  );
};

export default Demo;
