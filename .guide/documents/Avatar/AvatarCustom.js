import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../shared/Wrapper';
import {
  Avatar,
  AvatarGroup,
  Badge
} from '@fork-ui/components/core';

const PinkAvatar = styled(Avatar)`
  background-color: pink;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: var(--avatar-bg);
    color: pink;
  }
`;

const StyledAvatarGroup = styled(AvatarGroup)`
  position: relative;
  width: 60px;
  height: 60px;
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

const StyledAvatarGroup2 = styled(AvatarGroup)`
  position: relative;
  width: 65px;
  height: 71px;
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
    bottom: 0;
    right: 0;
  }

  > *:nth-child(3) {
    top: 0;
    left: 0;
  }

  > *:nth-child(4) {
    top: 0;
    right: 0;
  }
`;

const TeamAvatar2 = () => (
  <Badge.Label color="var(--green)" topRight label="PARTY">
    <StyledAvatarGroup2>
      <Avatar>OP</Avatar>
      <Avatar>H</Avatar>
      <PinkAvatar>SL</PinkAvatar>
      <Avatar>ML</Avatar>
    </StyledAvatarGroup2>
  </Badge.Label>
);

const Demo = () => {
  return (
    <Wrapper span="2em">
      <PinkAvatar>OP</PinkAvatar>
      <TeamAvatar />
      <TeamAvatar2 />
    </Wrapper>
  );
};

export default Demo;
