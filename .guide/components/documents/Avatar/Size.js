import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Avatar } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Avatar size="1rem">SM</Avatar>
      <Avatar size="20px">MD</Avatar>
      <Avatar size="25px">LG</Avatar>
    </Wrapper>
  );
};

export default Demo;
