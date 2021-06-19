import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Skeleton from './Skeleton';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <DemoBox name={allCode.Skeleton.demoName} code={allCode.Skeleton.code}>
          <Skeleton />
        </DemoBox>
      </Flex>
    </Flex>
  );
};
