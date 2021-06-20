import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Avatar } from '@fork-ui/core';
import { avatarLink } from '@style-guide/staff';

export default () => {
  return (
    <Wrapper>
      <Avatar color="var(--primary)">OP</Avatar>
      <Avatar color="purple">OP</Avatar>
      <Avatar color="purple" src={avatarLink}>H</Avatar>
    </Wrapper>
  );
};
