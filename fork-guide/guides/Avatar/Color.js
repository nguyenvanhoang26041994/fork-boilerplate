import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Avatar } from '@fork-ui/core';
import { avatarLink } from '@fork-guide/staff';

export default () => {
  return (
    <Wrapper>
      <Avatar color="var(--primary)">OP</Avatar>
      <Avatar color="purple">OP</Avatar>
      <Avatar color="purple" src={avatarLink}>H</Avatar>
    </Wrapper>
  );
};
