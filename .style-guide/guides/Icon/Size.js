import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Alarm } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper>
      <Alarm size="1rem" />
      <Alarm size="1.5rem" />
      <Alarm size="30px" />
    </Wrapper>
  );
};
