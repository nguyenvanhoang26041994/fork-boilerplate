import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { avatarLink } from '@@/.guide/shared/staff';
import {
  Avatar,
  Badge,
  AvatarGroup,
  Tooltip,
} from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <AvatarGroup>
        <Avatar>H</Avatar>
        <Tooltip title="Keylee">
          <Avatar>K</Avatar>
        </Tooltip>
        <Badge.Dot color="#0df316" bottomRight overlap>
          <Avatar src={avatarLink}>OP</Avatar>
        </Badge.Dot>
      </AvatarGroup>
      <AvatarGroup overflow={3}>
        <Avatar>LA</Avatar>
        <Avatar>P</Avatar>
        <Avatar>PL</Avatar>
        <Avatar>B</Avatar>
        <Avatar>J</Avatar>
        <Avatar>Z</Avatar>
        <Avatar>T</Avatar>
        <Avatar>E</Avatar>
      </AvatarGroup>
    </Wrapper>
  );
};

export default Demo;
