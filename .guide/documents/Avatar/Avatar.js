import React from 'react';
import Wrapper from '../../shared/Wrapper';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '../..//shared/staff';
import { Avatar, AvatarGroup, Badge } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Avatar shape="square">OP</Avatar>
      <Avatar src={avatarLink}>H</Avatar>
      <AvatarGroup>
        <Avatar src={avatarLink2}>HG</Avatar>
        <Avatar src={avatarLink3}>OP</Avatar>
        <Badge.Dot color="#0df316" overlap placement="bottom-end">
          <Avatar src={avatarLink}>OP</Avatar>
        </Badge.Dot>
      </AvatarGroup>
    </Wrapper>
  );
};

export default Demo;
