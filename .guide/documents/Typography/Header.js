import React from 'react';
import { Typo, Flex } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Flex col span="full">
      <Typo tag="h3">Lorem Ipsum</Typo>
      <Typo tag="h2">Lorem Ipsum</Typo>
      <Typo tag="h1">Lorem Ipsum</Typo>
    </Flex>
  );
};

export default Demo;
