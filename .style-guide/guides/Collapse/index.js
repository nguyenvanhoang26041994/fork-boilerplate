import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Collapse from './Collapse';
import Accordion from './Accordion';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Collapse.demoName} code={allCode.Collapse.code}>
            <Collapse />
          </DemoBox>
        </Flex>
        <Flex w="1/2">
          <DemoBox name={allCode.Accordion.demoName} code={allCode.Accordion.code}>
            <Accordion />
          </DemoBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
