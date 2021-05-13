import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { avatarLink } from '../../shared/staff';
import { Avatar, Badge } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Badge.Dot color="#0df316" overlap placement="bottom-end">
        <Avatar src={avatarLink}>H</Avatar>
      </Badge.Dot>
      <Badge.Dot color="var(--primary)" overlap placement="bottom-end">
        <Avatar>H</Avatar>
      </Badge.Dot>
    </Wrapper>
  );
};

export default Demo;
