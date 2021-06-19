import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Stepper from './Stepper';
import Alternate from './Alternate';
import DotOnly from './DotOnly';
import Vertical from './Vertical';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Stepper.demoName} code={allCode.Stepper.code}>
            <Stepper />
          </DemoBox>
        </Flex>
        <Flex w="1/2">
        <DemoBox name={allCode.Alternate.demoName} code={allCode.Alternate.code}>
            <Alternate />
          </DemoBox>
        </Flex>
      </Flex>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.DotOnly.demoName} code={allCode.DotOnly.code}>
            <DotOnly />
          </DemoBox>
        </Flex>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Vertical.demoName} code={allCode.Vertical.code}>
            <Vertical />
          </DemoBox>
        </Flex>
        <Flex w="1/3">
          <DemoBox name={allCode.Vertical.demoName} code={allCode.Vertical.code}>
            <Vertical />
          </DemoBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
