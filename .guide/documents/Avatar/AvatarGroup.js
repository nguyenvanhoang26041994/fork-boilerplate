import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { avatarLink } from '../../shared/staff';
import {
  Avatar,
  Badge,
  AvatarGroup,
} from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <AvatarGroup>
        <Avatar>HG</Avatar>
        <Avatar>OP</Avatar>
        <Badge.Dot color="#0df316" overlap placement="bottom-end">
          <Avatar src={avatarLink}>OP</Avatar>
        </Badge.Dot>
      </AvatarGroup>
    </Wrapper>
  );
};

export default Demo;
