import React from 'react';
import { Timeline } from '@fork-ui/components/core';
import DemoContent from '../../shared/DemoContent';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Timeline reverse>
        <Timeline.Item>
          <DemoContent />
        </Timeline.Item>
        <Timeline.Item>
          <DemoContent />
        </Timeline.Item>
        <Timeline.Item>
          <DemoContent />
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Demo;
