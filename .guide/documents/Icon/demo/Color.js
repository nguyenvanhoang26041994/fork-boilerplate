import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { BrandGithub, Alarm, Adjustments } from '@@/fork-ui/src/components/icons';

const Demo = () => {
  return (
    <Wrapper>
      <BrandGithub color="var(--primary)" />
      <Alarm color="red" />
      <Adjustments color="#00ffe9" />
    </Wrapper>
  );
};

export default Demo;
