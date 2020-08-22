import React from 'react';
import styled from 'styled-components';
import { Avatar, Badge, AvatarGroup, Tooltip } from '@@/fork-ui/src/components/core';

const avatarLink = 'https://i.pinimg.com/originals/ce/53/c5/ce53c5bcd350ba856e5c53c343376fb2.jpg';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 2rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <AvatarGroup>
        <Avatar name="H" />
        <Tooltip title="H">
          <Avatar name="M" />
        </Tooltip>
        <Badge count={1} dot color="#0df316" overlap bottomRight>
          <Avatar src={avatarLink} name="H" />
        </Badge>
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
