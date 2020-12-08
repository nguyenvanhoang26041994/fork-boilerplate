import React from 'react';
import { Timeline, Badge, Tooltip } from '@fork-ui/components/core';
import {
  Ban,
  Bell,
  BrandGithub,
  CloudDownload,
  PictureInPicture,
  Camera
} from '@fork-ui/components/icons';
import DemoContent2 from '../../shared/DemoContent2';

const Demo = () => {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Dot>
          <Ban />
        </Timeline.Dot>
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Dot>
          <Bell />
        </Timeline.Dot>
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Dot>
          <BrandGithub />
        </Timeline.Dot>
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Dot>
          <Tooltip top title="11:00 AM">
            <div>
              <CloudDownload />
            </div>
          </Tooltip>
        </Timeline.Dot>
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Dot>
          <Badge.Label label="10:00 AM">
            <Camera />
          </Badge.Label>
        </Timeline.Dot>
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Dot>
          <Badge.Label label="9:00 AM">
            <PictureInPicture />
          </Badge.Label>
        </Timeline.Dot>
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default Demo;
