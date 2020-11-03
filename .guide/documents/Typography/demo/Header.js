import React from 'react';
import { Typo, Flex } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Flex col span="full">
      <Typo h3>H3</Typo>
      <Typo h2>H2</Typo>
      <Typo h1>H1</Typo>
    </Flex>
  );
};

export default Demo;
