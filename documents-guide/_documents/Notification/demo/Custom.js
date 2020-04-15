import React, { useCallback } from 'react';
import {
  Button,
  Avatar,
  Icon,
  helper,
} from '@/rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  const onOpen = useCallback(() => {
    helper.pushNotification({
      render: (setOpen) => (
        <div className="flex">
          <Avatar
            src={avatarLink}
            name="Hoàng Nguyễn"
            className="mr-3 text-lg"
          />
          <div className="flex flex-col">
            <span>
              <a
                className="text-blue-600 mr-2"
                onClick={() => setOpen(false)}
              >
                Hoàng Nguyễn
              </a>
              send you a friend request
            </span>
            <div className="mt-1 text-gray-600">
              <Icon
                name="globe"
                className="mr-2"
                fontSize="0.85em"
              />
              5 minues ago,
              <i className="ml-2">
                click
                <a
                  className="text-blue-600 mx-2"
                  onClick={() => setOpen(false)}
                >
                  Hoàng Nguyễn
                </a>
                to close
              </i>
            </div>
          </div>
        </div>
      ),
      duration: 10000,
    });
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen}>Push Notification</Button>
    </div>
  );
};

export default Demo;
Demo.header = 'Custom';
Demo.href = 'notification-custom';

Demo.code = `import React, { useCallback } from 'react';
import {
  Button,
  Avatar,
  Icon,
  helper,
} from '@/rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  const onOpen = useCallback(() => {
    helper.pushNotification({
      render: (setOpen) => (
        <div className="flex">
          <Avatar
            src={avatarLink}
            name="Hoàng Nguyễn"
            className="mr-3 text-lg"
          />
          <div className="flex flex-col">
            <span>
              <a
                className="text-blue-600 mr-2"
                onClick={() => setOpen(false)}
              >
                Hoàng Nguyễn
              </a>
              send you a friend request
            </span>
            <div className="mt-1 text-gray-600">
              <Icon
                name="globe"
                className="mr-2"
                fontSize="0.85em"
              />
              5 minues ago,
              <i className="ml-2">
                click
                <a
                  className="text-blue-600 mx-2"
                  onClick={() => setOpen(false)}
                >
                  Hoàng Nguyễn
                </a>
                to close
              </i>
            </div>
          </div>
        </div>
      ),
      duration: 10000,
    });
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen}>Push Notification</Button>
    </div>
  );
};

export default Demo;
`;
