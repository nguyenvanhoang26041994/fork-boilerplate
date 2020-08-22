import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Avatar } from '@@/fork-ui/src/components/core';

const avatarLink = '';

const Demo = () => {
  return (
    <Wrapper>
      <Avatar
        size="0.85rem"
        src={avatarLink}
        name="H"
      />
      <Avatar
        size="2rem"
        src={avatarLink}
        name="H"
      />
      <Avatar
        size="40px"
        src={avatarLink}
        name="H"
      />
    </Wrapper>
  );
};

export default Demo;
