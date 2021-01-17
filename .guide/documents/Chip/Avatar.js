import React  from 'react';
import Wrapper from '../../shared/Wrapper';
import { avatarLink } from '../../shared/staff';
import { Chip, Avatar } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Chip
        avatar={<Avatar square>S</Avatar>}
      >
        Slack
      </Chip>
      <Chip
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
