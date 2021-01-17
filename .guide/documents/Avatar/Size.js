import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Avatar } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Avatar size={40}>SM</Avatar>
      <Avatar size={70}>MD</Avatar>
      <Avatar size={100}>LG</Avatar>
    </Wrapper>
  );
};

export default Demo;
