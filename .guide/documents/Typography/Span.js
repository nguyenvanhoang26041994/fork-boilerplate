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
      <Typo tag="span">{typo}</Typo>
      <br />
      <Typo textDecoration="u">{typo}</Typo>
      <br />
      <Typo disabled>{typo}</Typo>
      <br />
      <Typo textDecoration="through">{typo}</Typo>
      <br />
      <Typo bold>{typo}</Typo>
      <br />
      <Typo fontStyle="italic">{typo}</Typo>
      <br />
      <Typo color="var(--primary)">{typo}</Typo>
    </Flex>
  );
};

export default Demo;
