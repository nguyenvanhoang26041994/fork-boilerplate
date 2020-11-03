import React from 'react';
import styled from 'styled-components';
import Wrapper from '@@/.guide/shared/Wrapper';
import {
  Avatar,
  AvatarGroup,
  Badge
} from '@@/fork-ui/src/components/core';

const PinkAvatar = styled(Avatar)`
  background-color: pink;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: var(--avatar--bg);
    color: pink;
  }
`;

const StyledAvatarGroup = styled(AvatarGroup)`
  font-size: 0.9em;
  position: relative;
  width: 4.7em;
  height: 4.7em;
  cursor: pointer;

  > * {
    margin: 0;
    position: absolute;
  }

  > *:nth-child(1) {
    bottom: 0;
    left: 0;
  }

  > *:nth-child(2) {
    top: 0;
    right: 0;
  }
`;

const TeamAvatar = () => (
  <Badge.Dot color="var(--green)" bottomRight overlap>
    <StyledAvatarGroup>
      <Avatar>OP</Avatar>
      <Avatar>H</Avatar>
    </StyledAvatarGroup>
  </Badge.Dot>
);

const Demo = () => {
  return (
    <Wrapper>
      <PinkAvatar>OP</PinkAvatar>
      <TeamAvatar />
    </Wrapper>
  );
};

export default Demo;
