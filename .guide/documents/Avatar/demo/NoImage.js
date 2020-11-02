import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Avatar } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Avatar>H</Avatar>
      <Avatar color="orange">H</Avatar>
      <Avatar color="#19b39d">H</Avatar>
      <Avatar square>H</Avatar>
    </Wrapper>
  );
};

export default Demo;
