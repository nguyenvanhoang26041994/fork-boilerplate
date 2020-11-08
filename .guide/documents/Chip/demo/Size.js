import React  from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Chip } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Chip size="20px">20px</Chip>
      <Chip size="2rem">2rem</Chip>
    </Wrapper>
  );
};

export default Demo;
