import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { avatarLink } from '@@/.guide/shared/staff';
import { Avatar, Badge } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Badge.Dot color="#0df316" overlap bottomRight>
        <Avatar src={avatarLink}>H</Avatar>
      </Badge.Dot>
      <Badge.Dot color="#0df316" bottomRight>
        <Avatar src={avatarLink} square>H</Avatar>
      </Badge.Dot>
      <Badge.Dot color="#0df316" overlap bottomRight>
        <Avatar>H</Avatar>
      </Badge.Dot>
    </Wrapper>
  );
};

export default Demo;
