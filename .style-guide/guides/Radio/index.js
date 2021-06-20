import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Radio from './Radio';
import Color from './Color';
import Size from './Size';
import Controlled from './Controlled';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Radio.demoName} code={allCode.Radio.code}>
            <Radio />
          </DemoBox>
        </Flex>
        <Flex w="1/2">
          <DemoBox name={allCode.Color.demoName} code={allCode.Color.code}>
            <Color />
          </DemoBox>
        </Flex>
      </Flex>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Controlled.demoName} code={allCode.Controlled.code}>
            <Controlled />
          </DemoBox>
        </Flex>
        <Flex w="1/2">
          <DemoBox name={allCode.Size.demoName} code={allCode.Size.code}>
            <Size />
          </DemoBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
