import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Avatar, Badge } from 'fork-design';
import { avatarLink } from '@fork-guide/staff';

export default () => {
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
