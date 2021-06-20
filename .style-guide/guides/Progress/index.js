import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Progress from './Progress';
import Linear from './Linear';
import SimulateProgress from './SimulateProgress';
import Size from './Size';
import Color from './Color';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Progress.demoName} code={allCode.Progress.code}>
            <Progress />
          </DemoBox>
        </Flex>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Color.demoName} code={allCode.Color.code}>
            <Color />
          </DemoBox>
        </Flex>
        <Flex w="1/3">
          <DemoBox name={allCode.SimulateProgress.demoName} code={allCode.SimulateProgress.code}>
            <SimulateProgress />
          </DemoBox>
        </Flex>
      </Flex>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Linear.demoName} code={allCode.Linear.code}>
            <Linear />
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
