import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { avatarLink } from '@@/.guide/shared/staff';
import {
  Avatar,
  Badge,
  AvatarGroup,
} from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <AvatarGroup>
        <Avatar>HG</Avatar>
        <Avatar>OP</Avatar>
        <Badge.Dot color="#0df316" overlap bottomRight>
          <Avatar src={avatarLink}>OP</Avatar>
        </Badge.Dot>
      </AvatarGroup>
    </Wrapper>
  );
};

export default Demo;
