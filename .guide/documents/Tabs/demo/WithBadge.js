import React from 'react';
import { Tabs, Badge, Icon } from '@/rc-neumorphism/core';

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
              <Icon name="bell" />
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
              <Icon name="messages" />
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
