import React from 'react';
import { Timeline } from '@@/fork-ui/src/components/core';
import { Home, CaretDown  } from '@@/fork-ui/src/components/icons';
import DemoContent from '@@/.guide/shared/DemoContent';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Timeline>
        <Timeline.Item icon={<Home />}>
          <DemoContent />
        </Timeline.Item>
        <Timeline.Item>
          <DemoContent />
        </Timeline.Item>
        <Timeline.Item icon={<CaretDown />}>
          <DemoContent />
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Demo;
