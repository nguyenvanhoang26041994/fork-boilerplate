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
      <Avatar name="H" />
      <Avatar
        src={avatarLink}
        name="H"
      />
      <AvatarGroup className="ml-5">
        <Avatar name="H" />
        <Tooltip title="H">
          <Avatar name="M" />
        </Tooltip>
        <Badge.Dot color="#0df316" overlap bottomRight>
          <Avatar src={avatarLink} name="H" />
        </Badge.Dot>
      </AvatarGroup>
      <AvatarGroup overflowAvatar={3} className="ml-5">
        <Avatar name="H" />
        <Avatar name="O" />
        <Avatar name="A" />
        <Avatar name="N" />
        <Avatar name="G" />
        <Avatar name="H" />
        <Avatar name="H" />
        <Avatar name="H" />
      </AvatarGroup>
    </Wrapper>
  );
};

export default Demo;
