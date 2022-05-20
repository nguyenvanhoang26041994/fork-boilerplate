import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Avatar, AvatarGroup, Badge } from 'fork-design';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';

const StyledAvatarGroup = styled(AvatarGroup)`
  --size: 60px;
  position: relative;
  width: var(--size);
  height: var(--size);
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
export default () => {
  return (
    <Wrapper>
      <Badge.Dot overlap placement="bottom-end" color="var(--green-6)">
        <StyledAvatarGroup>
          <Avatar src={avatarLink} size={40} />
          <Avatar src={avatarLink2} size={40} />
        </StyledAvatarGroup>
      </Badge.Dot>
    </Wrapper>
  );
};
