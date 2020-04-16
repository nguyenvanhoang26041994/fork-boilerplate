import React, { useCallback } from 'react';
import {
  Button,
  Avatar,
  Icon,
  helper,
} from '@/rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  const onOpen5 = useCallback(() => {
    helper.pushNotification({
      children: (
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
                className="mr-2"
                fontSize="0.85em"
              />
              5 minues ago
            </div>
          </div>
        </div>
      ),
      duration: 5000,
    });
  }, []);

  const onOpen = useCallback(() => {
    helper.pushNotification({
      render: (setOpen) => (
        <div
          className="flex"
          onClick={() => setOpen(false)}
        >
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
                className="mr-2"
                fontSize="0.85em"
              />
              5 minues ago
            </div>
          </div>
        </div>
      ),
      duration: 0,
    });
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen5} className="mr-4">5 second</Button>
      <Button onClick={onOpen}>No auto close</Button>
    </div>
  );
};

export default Demo;
Demo.header = 'DURATION';
Demo.anchorTitle = 'Duration';
Demo.href = 'notification-duration';

Demo.code = `import React, { useCallback } from 'react';
import {
  Button,
  Avatar,
  Icon,
  helper,
} from 'rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  const onOpen5 = useCallback(() => {
    helper.pushNotification({
      children: (
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
                className="mr-2"
                fontSize="0.85em"
              />
              5 minues ago
            </div>
          </div>
        </div>
      ),
      duration: 5000,
    });
  }, []);

  const onOpen = useCallback(() => {
    helper.pushNotification({
      render: (setOpen) => (
        <div
          className="flex"
          onClick={() => setOpen(false)}
        >
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
                className="mr-2"
                fontSize="0.85em"
              />
              5 minues ago
            </div>
          </div>
        </div>
      ),
      duration: 0,
    });
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen5} className="mr-4">5 second</Button>
      <Button onClick={onOpen}>No auto close</Button>
    </div>
  );
};

export default Demo;
`;
