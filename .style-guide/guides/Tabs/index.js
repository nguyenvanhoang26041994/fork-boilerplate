import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Tabs from './Tabs';
import WithButtonGroup from './WithButtonGroup';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Tabs.demoName} code={allCode.Tabs.code}>
            <Tabs />
          </DemoBox>
        </Flex>
        <Flex w="1/2">
          <DemoBox name={allCode.WithButtonGroup.demoName} code={allCode.WithButtonGroup.code}>
            <WithButtonGroup />
          </DemoBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
