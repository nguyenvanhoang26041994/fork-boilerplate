import React, { useState, useEffect } from 'react';
import { Menu, Button } from '@/rc-neumorphism/core';

const Demo = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 3000);
    }
  }, [loading]);

  return (
    <div className="flex flex-col">
      <div className="flex mb-5">
        <div className="mr-2">
        <Menu loading={loading}>
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
        </div>
        <div>
          <Menu loading={loading} iconOnly>
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
        </div>
      </div>
      <div>
        <Button onClick={() => setLoading(true)}>
          Loading
        </Button>
      </div>
    </div>
  );
};

export default Demo;
