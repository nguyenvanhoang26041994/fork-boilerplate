import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Avatar } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Avatar size={40}>SM</Avatar>
      <Avatar size={70}>MD</Avatar>
      <Avatar size={100}>LG</Avatar>
    </Wrapper>
  );
};
