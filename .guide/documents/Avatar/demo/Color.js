import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { avatarLink } from '@@/.guide/shared/staff';
import { Avatar } from '@@/fork-ui/src/components/core';

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
