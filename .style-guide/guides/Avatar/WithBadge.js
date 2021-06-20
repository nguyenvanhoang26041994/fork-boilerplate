import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Avatar, Badge } from '@fork-ui/core';
import { avatarLink } from '@style-guide/staff';

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
