import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Badge from './Badge';
import Color from './Color';
import Overlap from './Overlap';
import OverflowCount from './OverflowCount';
import Placement from './Placement';
import Custom from './Custom';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Badge.demoName} code={allCode.Badge.code}>
            <Badge />
          </DemoBox>
        </Flex>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.OverflowCount.demoName} code={allCode.OverflowCount.code}>
            <OverflowCount />
          </DemoBox>
        </Flex>
        <Flex w="1/3">
          <DemoBox name={allCode.Overlap.demoName} code={allCode.Overlap.code}>
            <Overlap />
          </DemoBox>
        </Flex>
      </Flex>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Color.demoName} code={allCode.Color.code}>
            <Color />
          </DemoBox>
        </Flex>
        <Flex w="1/2">
          <DemoBox name={allCode.Placement.demoName} code={allCode.Placement.code}>
            <Placement />
          </DemoBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
