import React from 'react';
import { Timeline } from '@fork-ui/components/core';
import DemoContent2 from '../../shared/DemoContent2';

const Demo = () => {
  return (
    <Timeline right>
      <Timeline.Item>
        <Timeline.Dot />
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Dot />
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Dot />
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default Demo;
