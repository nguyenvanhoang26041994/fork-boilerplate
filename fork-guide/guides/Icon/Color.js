import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { BrandGithub, Alarm, Adjustments } from 'fork-design/icons/lazy';

export default () => {
  return (
    <Wrapper>
      <BrandGithub color="var(--primary)" />
      <Alarm color="red" />
      <Adjustments color="#00ffe9" />
    </Wrapper>
  );
};
