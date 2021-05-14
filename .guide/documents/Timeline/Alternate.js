import React from 'react';
import { Timeline, Badge } from '@fork-ui/components/core';
import PictureInPicture from '@fork-ui/components/icons/all/PictureInPicture';
import DemoContent2 from '../../shared/DemoContent2';

const Demo = () => {
  return (
    <Timeline alternate>
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
      <Timeline.Item>
        <Timeline.Button>
          <Badge.Label top label="9:00 AM">
            <PictureInPicture />
          </Badge.Label>
        </Timeline.Button>
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
