import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { avatarLink } from '../../shared/staff';
import { Avatar } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Avatar color="var(--primary)">OP</Avatar>
      <Avatar color="purple">OP</Avatar>
      <Avatar color="purple" src={avatarLink}>H</Avatar>
    </Wrapper>
  );
};

export default Demo;
