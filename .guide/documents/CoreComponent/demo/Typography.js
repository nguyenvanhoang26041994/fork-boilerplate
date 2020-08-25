import React from 'react';
import { Typo, Flex } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Flex col span="full">
      <Typo h6>Heading</Typo>
      <Typo h5>Heading</Typo>
      <Typo h4>Heading</Typo>
      <Typo h3>Heading</Typo>
      <Typo h2>Heading</Typo>
      <Typo h1>Heading</Typo>
    </Flex>
  );
};

export default Demo;
