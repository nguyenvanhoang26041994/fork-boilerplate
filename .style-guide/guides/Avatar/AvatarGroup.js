import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Avatar, AvatarGroup, Badge } from '@fork-ui/core';
import { avatarLink } from '@style-guide/staff';

export default () => {
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
