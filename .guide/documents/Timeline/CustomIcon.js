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
        <Timeline.Button>
          <Ban />
        </Timeline.Button>
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Button>
          <Bell />
        </Timeline.Button>
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Button>
          <BrandGithub />
        </Timeline.Button>
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Button>
          <Tooltip top title="11:00 AM">
            <div>
              <CloudDownload />
            </div>
          </Tooltip>
        </Timeline.Button>
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Button>
          <Badge.Label label="10:00 AM">
            <Camera />
          </Badge.Label>
        </Timeline.Button>
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Button>
          <Badge.Label label="9:00 AM">
            <PictureInPicture />
          </Badge.Label>
        </Timeline.Button>
        <Timeline.Content>
          <DemoContent2 />
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default Demo;
