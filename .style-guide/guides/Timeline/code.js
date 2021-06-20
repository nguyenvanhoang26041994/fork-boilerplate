export const Timeline = {
  code: `import React from 'react';
import { DemoContentV2 } from '@style-guide/components';
import { Timeline } from '@fork-ui/core';

export default () => {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Button />
        <Timeline.Content>
          <DemoContentV2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Button />
        <Timeline.Content>
          <DemoContentV2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Button />
        <Timeline.Content>
          <DemoContentV2 />
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};
`,
  demoName: 'Timeline',
}

