import React from 'react';
import { Timeline, Icon } from '@/components';

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
        <Icon
          name="globe"
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
        <Timeline.Item icon="home">
          <NotificationBox
            requester="Sơn Lê"
            time="5 day ago"
          />
        </Timeline.Item>
        <Timeline.Item icon="message">
          <NotificationBox
            requester="Hoàng Nguyễn"
            time="4 day ago"
          />
        </Timeline.Item>
        <Timeline.Item icon="power">
          <NotificationBox
            requester="Seventeen"
            time="3 day ago"
          />
        </Timeline.Item>
        <Timeline.Item icon="caret-down">
          <NotificationBox
            requester="Alan Walker"
            time="2 day ago"
          />
        </Timeline.Item>
        <Timeline.Item icon="sun">
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

Demo.header = 'CUSTOMICON';
Demo.href = 'timeline-customicon';
Demo.code = `import React from 'react';
import { Timeline, Icon } from '@/components';

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
        <Icon
          name="globe"
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
        <Timeline.Item icon="home">
          <NotificationBox
            requester="Sơn Lê"
            time="5 day ago"
          />
        </Timeline.Item>
        <Timeline.Item icon="message">
          <NotificationBox
            requester="Hoàng Nguyễn"
            time="4 day ago"
          />
        </Timeline.Item>
        <Timeline.Item icon="power">
          <NotificationBox
            requester="Seventeen"
            time="3 day ago"
          />
        </Timeline.Item>
        <Timeline.Item icon="caret-down">
          <NotificationBox
            requester="Alan Walker"
            time="2 day ago"
          />
        </Timeline.Item>
        <Timeline.Item icon="sun">
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
`;
