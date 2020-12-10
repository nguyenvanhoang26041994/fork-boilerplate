import React from 'react';
import { Timeline } from '@fork-ui/components/core';
import DemoContent2 from '../../shared/DemoContent2';
import DemoContent from '../../shared/DemoContent';

const Demo = () => {
  return (
    <Timeline reverse>
      <Timeline.Item>
        <Timeline.Button />
        <Timeline.Content>
          <DemoContent />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Button />
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Button />
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default Demo;
