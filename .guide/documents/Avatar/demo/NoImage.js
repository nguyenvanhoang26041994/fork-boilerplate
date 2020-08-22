import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Avatar } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Avatar name="H" />
      <Avatar
        name="H"
        color="orange"
      />
      <Avatar
        name="H"
        color="#19b39d"
      />
      <Avatar name="H" square />
    </Wrapper>
  );
};

export default Demo;
