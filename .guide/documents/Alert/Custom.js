import React, { useCallback } from 'react';
import { Button, Avatar, helper } from '@fork-ui/components/core';
import Globe from '@fork-ui/components/icons/all/Globe';

const avatarLink = '';

const Demo = () => {
  const onOpen = useCallback(() => {
    helper.pushAlert({
      title: 'Custom Alert',
      type: 'warning',
      render: (setOpen) => (
        <div className="flex flex-col">
          <div className="flex mb-5">
            <Avatar src={avatarLink} className="mr-3">H</Avatar>
            <div className="flex flex-col">
              <span>
                <a className="text-blue-600 mr-2">
                  Hoàng Nguyễn 
                </a>
                follow you, please be carefull
              </span>
              <div className="mt-1 text-gray-600">
                <Globe
                  className="mr-2"
                  fontSize="0.85em"
                />
                5 minues ago
              </div>
            </div>
          </div>
          <div
            className="text-orange-500 self-end cursor-pointer"
            onClick={() => setOpen(false)}
          >
            CLOSE
          </div>
        </div>
      ),
      duration: 100000,
      closable: false,
    });
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen}>Push Alert</Button>
    </div>
  );
};

export default Demo;
