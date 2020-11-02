import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { avatarLink } from '@@/.guide/shared/staff';
import {
  Avatar,
  AvatarGroup,
  Badge,
  Tooltip,
} from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Avatar>H</Avatar>
      <Avatar src={avatarLink}>H</Avatar>
      <AvatarGroup className="ml-5">
        <Avatar>H</Avatar>
        <Tooltip title="H">
          <Avatar>H</Avatar>
        </Tooltip>
        <Badge.Dot color="#0df316" overlap bottomRight>
          <Avatar src={avatarLink}>H</Avatar>
        </Badge.Dot>
      </AvatarGroup>
      <AvatarGroup overflow={3} className="ml-5">
        <Avatar>H</Avatar>
        <Avatar>L</Avatar>
        <Avatar>S</Avatar>
        <Avatar>Y</Avatar>
        <Avatar>Q</Avatar>
        <Avatar>X</Avatar>
        <Avatar>S</Avatar>
        <Avatar>OP</Avatar>
      </AvatarGroup>
    </Wrapper>
  );
};

export default Demo;
