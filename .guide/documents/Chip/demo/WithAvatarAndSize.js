import React  from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { avatarLink } from '@@/.guide/shared/staff';
import { Chip, Avatar } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Chip
        size="1.5rem"
        avatar={<Avatar src={avatarLink} square>S</Avatar>}
      >
        Slack
      </Chip>
      <Chip
        size="1.5rem"
        rounded
        closable
        avatar={<Avatar src={avatarLink}>VS</Avatar>}
      >
        VS Code
      </Chip>
    </Wrapper>
  );
};

export default Demo;
