import React from 'react';
import { Avatar } from '@/fork-ui/core';

const avatarLink = '';

const Demo = () => {
  return (
    <div className="flex">
      <Avatar
        fontSize="0.85rem"
        src={avatarLink}
        className="mr-3"
        name="Hoàng Nguyễn"
      />
      <Avatar
        fontSize="2rem"
        src={avatarLink}
        className="mr-3"
        name="Hoàng Nguyễn"
      />
      <Avatar
        fontSize="40px"
        src={avatarLink}
        className="mr-3"
        name="Hoàng Nguyễn"
      />
    </div>
  );
};

export default Demo;
