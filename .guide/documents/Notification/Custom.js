import React, { useCallback } from 'react';
import {
  Button,
  Avatar,
  helper,
} from '@fork-ui/components/core';
import { Globe } from '@fork-ui/components/icons';

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
              <Globe
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
