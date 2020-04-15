import React from 'react';
import { Avatar } from '@/rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  return (
    <div className="flex">
      <Avatar
        src={avatarLink}
        className="mr-3"
        name="Hoàng Nguyễn"
      />
      <Avatar
        src={avatarLink}
        className="mr-3"
        square
        name="Hoàng Nguyễn"
      />
    </div>
  );
};

export default Demo;
Demo.header = 'BASIC';
Demo.anchorTitle = 'Basic';
Demo.href = 'avatar-basic';

Demo.code = `import React from 'react';
import { Avatar } from '@/rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  return (
    <div className="flex">
      <Avatar
        src={avatarLink}
        className="mr-3"
        name="Hoàng Nguyễn"
      />
      <Avatar
        src={avatarLink}
        className="mr-3"
        square
        name="Hoàng Nguyễn"
      />
    </div>
  );
};

export default Demo;
`;
