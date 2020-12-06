import React from 'react';
import { Timeline } from '@fork-ui/components/core';
import { History, Calendar } from '@fork-ui/components/icons';
import DemoContent2 from '../../shared/DemoContent2';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Timeline>
        <Timeline.Item>
          <DemoContent2 />
        </Timeline.Item>
        <Timeline.Item>
          <DemoContent2 />
        </Timeline.Item>
        <Timeline.Item>
          <DemoContent2 />
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Demo;
