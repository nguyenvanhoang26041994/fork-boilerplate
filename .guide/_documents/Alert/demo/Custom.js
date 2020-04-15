import React, { useCallback } from 'react';
import { Button, Avatar, Icon, helper } from '@/rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  const onOpen = useCallback(() => {
    helper.pushAlert({
      title: 'Custom Alert',
      type: 'warning',
      render: (setOpen) => (
        <div className="flex flex-col">
          <div className="flex mb-5">
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
                follow you, please be carefull
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
Demo.header = 'Custom';
Demo.href = 'alert-custom';

Demo.code = `import React, { useCallback } from 'react';
import { Button, Avatar, Icon, helper } from '@/rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  const onOpen = useCallback(() => {
    helper.pushAlert({
      title: 'Custom Alert',
      type: 'warning',
      render: (setOpen) => (
        <div className="flex flex-col">
          <div className="flex mb-5">
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
                follow you, please be carefull
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
`;
