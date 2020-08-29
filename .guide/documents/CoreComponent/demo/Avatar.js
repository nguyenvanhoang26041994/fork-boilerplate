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
        <Avatar name="M" />
        <Tooltip title="Hoàng Nguyễn">
          <Avatar name="H" />
        </Tooltip>
        <Badge.Dot overlap bottomRight color="#0df316">
          <Avatar src={avatarLink} name="H" />
        </Badge.Dot>
      </AvatarGroup>
      <AvatarGroup overflowAvatar={3} className="ml-5">
        <Avatar name="H" />
        <Avatar name="P" />
        <Avatar name="K" />
        <Avatar name="J" />
        <Avatar name="Q" />
        <Avatar name="V" />
        <Avatar name="F" />
        <Avatar name="L" />
      </AvatarGroup>
      <AvatarGroup overflowAvatar={3} className="ml-5">
        <Avatar name="H" />
        <Avatar name="P" />
        <Avatar name="K" />
        <Avatar name="J" />
      </AvatarGroup>
    </Wrapper>
  );
};

export default Demo;
