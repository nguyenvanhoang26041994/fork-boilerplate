import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { avatarLink } from '@@/.guide/shared/staff';
import { Avatar } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Avatar square>OP</Avatar>
      <Avatar>OP</Avatar>
      <Avatar src={avatarLink}>H</Avatar>
    </Wrapper>
  );
};

export default Demo;
