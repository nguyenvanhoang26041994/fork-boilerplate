import React from 'react';
import { Typo, Flex } from '@fork-ui/components/core';

const typo = `Lorem ipsum is a pseudo-Latin 
text used in web design, 
typography, 
layout, 
and printing in place of English to emphasise design elements over content`;

const Demo = () => {
  return (
    <Flex col>
      <Typo>{typo}</Typo>
      <br />
      <Typo color="red">{typo}</Typo>
      <br />
      <Typo color="var(--color-low-emphasis)">{typo}</Typo>
      <br />
      <Typo color="var(--primary)">{typo}</Typo>
    </Flex>
  );
};

export default Demo;
