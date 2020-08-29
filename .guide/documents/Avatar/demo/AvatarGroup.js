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
        <Avatar name="H" />
        <Tooltip title="H">
          <Avatar name="M" />
        </Tooltip>
        <Badge.Dot color="#0df316" bottomRight overlap>
          <Avatar src={avatarLink} name="H" />
        </Badge.Dot>
      </AvatarGroup>
      <AvatarGroup overflowAvatar={3}>
        <Avatar name="H" />
        <Avatar name="H" />
        <Avatar name="H" />
        <Avatar name="H" />
        <Avatar name="H" />
        <Avatar name="H" />
        <Avatar name="H" />
        <Avatar name="H" />
      </AvatarGroup>
    </Wrapper>
  );
};

export default Demo;
