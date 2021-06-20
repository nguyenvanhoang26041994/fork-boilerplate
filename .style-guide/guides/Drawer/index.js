import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Drawer from './Drawer';
import Placement from './Placement';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={ { paddingBottom: '1px' } }>
        <Flex w="1/2" style={ { paddingRight: '1px' } }>
          <DemoBox name={allCode.Drawer.demoName} code={allCode.Drawer.code}>
            <Drawer />
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
