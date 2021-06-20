import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Timeline from './Timeline';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Timeline.demoName} code={allCode.Timeline.code}>
            <Timeline />
          </DemoBox>
        </Flex>
        <Flex w="1/2">
          <DemoBox name={allCode.Timeline.demoName} code={allCode.Timeline.code}>
            <Timeline />
          </DemoBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
