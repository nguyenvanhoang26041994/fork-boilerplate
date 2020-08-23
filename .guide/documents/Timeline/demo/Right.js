import React from 'react';
import { Timeline } from '@@/fork-ui/src/components/core';
import DemoContent from '@@/.guide/shared/DemoContent';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Timeline right>
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
