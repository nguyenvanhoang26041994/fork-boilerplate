import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Avatar, AvatarGroup, Badge } from 'fork-design';
import { avatarLink } from '@fork-guide/staff';

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
