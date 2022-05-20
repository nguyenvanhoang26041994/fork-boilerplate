export const Timeline = {
  code: `import React from 'react';
import { DemoContentV2 } from '@fork-guide/components';
import { Timeline } from 'fork-design';

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

