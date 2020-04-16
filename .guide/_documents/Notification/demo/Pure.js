import React from 'react';
import {
  PureNotification,
  Avatar,
  Icon,
} from '@/rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  return (
    <div className="w-full">
      <PureNotification title="Notification" className="mb-5">
        <div className="flex">
          <Avatar
            src={avatarLink}
            name="Hoàng Nguyễn"
            className="mr-3 text-lg"
          />
          <div className="flex flex-col">
            <span>
              <a className="text-blue-600">Hoàng Nguyễn </a>
              send you a friend request
            </span>
            <div className="mt-1 text-gray-600">
              <Icon
                name="globe"
                className="mr-2"
                fontSize="0.85em"
              />
              5 minues ago
            </div>
          </div>
        </div>
      </PureNotification>
      <PureNotification className="mb-5">
        <div className="flex">
          <Avatar
            src={avatarLink}
            name="Hoàng Nguyễn"
            className="mr-3 text-lg"
          />
          <div className="flex flex-col">
            <span>
              <a className="text-blue-600 mr-2">
                Hoàng Nguyễn 
              </a>
              send you a friend request
            </span>
            <div className="mt-1 text-gray-600">
              <Icon
                name="globe"
                className="mr-2" fontSize="0.85em"
              />
              5 minues ago
            </div>
          </div>
        </div>
      </PureNotification>
    </div>
  );
};

export default Demo;
Demo.header = 'PURE';
Demo.anchorTitle = 'Pure';
Demo.href = 'notification-pure';

Demo.code = `import React from 'react';
import {
  PureNotification,
  Avatar,
  Icon,
} from 'rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  return (
    <div className="w-full">
      <PureNotification title="Notification" className="mb-5">
        <div className="flex">
          <Avatar
            src={avatarLink}
            name="Hoàng Nguyễn"
            className="mr-3 text-lg"
          />
          <div className="flex flex-col">
            <span>
              <a className="text-blue-600">Hoàng Nguyễn </a>
              send you a friend request
            </span>
            <div className="mt-1 text-gray-600">
              <Icon
                name="globe"
                className="mr-2"
                fontSize="0.85em"
              />
              5 minues ago
            </div>
          </div>
        </div>
      </PureNotification>
      <PureNotification className="mb-5">
        <div className="flex">
          <Avatar
            src={avatarLink}
            name="Hoàng Nguyễn"
            className="mr-3 text-lg"
          />
          <div className="flex flex-col">
            <span>
              <a className="text-blue-600 mr-2">
                Hoàng Nguyễn 
              </a>
              send you a friend request
            </span>
            <div className="mt-1 text-gray-600">
              <Icon
                name="globe"
                className="mr-2" fontSize="0.85em"
              />
              5 minues ago
            </div>
          </div>
        </div>
      </PureNotification>
    </div>
  );
};

export default Demo;
`;
