import React from 'react';
import { Timeline } from '@/fork-ui/core';
import { Globe } from '@@/fork-ui/src/components/Icon';

const NotificationBox = ({ requester, time }) => {
  return (
    <div
      className="flex flex-col px-3 pb-3 mb-10 rounded-lg"
    >
      <span>
        <a className="text-blue-600">{requester} </a>
        send you a friend request
      </span>
      <div className="mt-1 text-gray-600">
        <Globe
          className="mr-2" fontSize="0.85em"
        />
        {time}
      </div>
    </div>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Timeline className="mb-5">
        <Timeline.Item icon={<Home />}>
          <NotificationBox
            requester="Sơn Lê"
            time="5 day ago"
          />
        </Timeline.Item>
        <Timeline.Item icon={<Message />}>
          <NotificationBox
            requester="Hoàng Nguyễn"
            time="4 day ago"
          />
        </Timeline.Item>
        <Timeline.Item icon={<Power />}>
          <NotificationBox
            requester="Seventeen"
            time="3 day ago"
          />
        </Timeline.Item>
        <Timeline.Item icon={<CaretDown />}>
          <NotificationBox
            requester="Alan Walker"
            time="2 day ago"
          />
        </Timeline.Item>
        <Timeline.Item icon={<Sun />}>
          <NotificationBox
            requester="Hoàng Nguyễn"
            time="1 day ago"
          />
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Demo;
