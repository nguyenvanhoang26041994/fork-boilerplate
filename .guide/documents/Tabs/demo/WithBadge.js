import React from 'react';
import { Tabs, Badge } from '@@/fork-ui/src/components/core';
import { Bell, Messages } from '@@/fork-ui/src/components/icons';

const Description = ({ content }) => {
  return (
    <div
      className="neumorphism flex items-center justify-center"
      style={{ height: '10rem' }}
    >
      {content}
    </div>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Tabs>
        <Tabs.Item 
          title="Notification"
          key="tab-1"
          icon={(
            <Badge className="mr-4" count={2}>
              <Bell />
            </Badge>
          )}
        >
          <Description content="Description Notification" />
        </Tabs.Item>
        <Tabs.Item 
          title="Message"
          key="tab-2"
          iconRight={(
            <Badge className="ml-2" count={122}>
              <Messages />
            </Badge>
          )}
        >
          <Description content="Description Message" />
        </Tabs.Item>
        <Tabs.Item 
          title="Normal Tab"
          key="tab-3"
        >
          <Description content="Description Normal Tab" />
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default Demo;
