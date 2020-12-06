import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { avatarLink } from '../..//shared/staff';
import { Avatar } from '@fork-ui/components/core';

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
