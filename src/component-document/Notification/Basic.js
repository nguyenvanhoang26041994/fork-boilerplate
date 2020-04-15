import React, { useState, useCallback } from 'react';
import { 
  Button,
  Notification,
  Avatar,
  Icon,
} from '@/rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Notification
        title="Notification"
        open={open}
        onClose={onClose}
        duration={0}
      >
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
      </Notification>
      <Button onClick={onOpen}>
        Open Notification
      </Button>
    </div>
  );
};

export default Demo;
