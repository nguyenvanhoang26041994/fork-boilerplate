import React from 'react';
import { Timeline, Flex } from '@@/fork-ui/src/components/core';
import { History, Calendar } from '@@/fork-ui/src/components/icons';
import DemoContent2 from '@@/.guide/shared/DemoContent2';
import DemoContent from '@@/.guide/shared/DemoContent';

const Demo = () => {
  return (
    <Flex span="full">
      <Timeline reverse>
        <Timeline.Item icon={<History />}>
          <DemoContent2 />
        </Timeline.Item>
        <Timeline.Item>
          <DemoContent2 />
        </Timeline.Item>
        <Timeline.Item tooltipTitle="15 Aug, 2020" icon={<Calendar />}>
          <DemoContent />
        </Timeline.Item>
      </Timeline>
    </Flex>
  );
};

export default Demo;
