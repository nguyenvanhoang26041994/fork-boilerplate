import React from 'react';
import { Timeline, Badge } from '@fork-ui/components/core';
import { PictureInPicture } from '@fork-ui/components/icons';
import DemoContent2 from '../../shared/DemoContent2';

const Demo = () => {
  return (
    <Timeline alternate>
      <Timeline.Item>
        <Timeline.Connector />
        <Timeline.Dot />
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Connector />
        <Timeline.Dot />
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Connector />
        <Timeline.Dot>
          <Badge.Label top label="9:00 AM">
            <PictureInPicture />
          </Badge.Label>
        </Timeline.Dot>
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Connector />
        <Timeline.Dot />
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Connector />
        <Timeline.Dot />
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Connector />
        <Timeline.Dot />
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Connector />
        <Timeline.Dot />
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default Demo;
