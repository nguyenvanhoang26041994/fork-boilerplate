import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { avatarLink } from '@@/.guide/shared/staff';
import { Avatar, Badge } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Badge count={1} dot color="#0df316" overlap bottomRight>
        <Avatar src={avatarLink} name="H" />
      </Badge>
      <Badge count={1} dot color="#0df316" bottomRight>
        <Avatar src={avatarLink} square name="H" />
      </Badge>
      <Badge count={1} dot color="#0df316" overlap bottomRight>
        <Avatar name="H" />
      </Badge>
    </Wrapper>
  );
};

export default Demo;
