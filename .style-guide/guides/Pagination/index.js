import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Pagination from './Pagination';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="full">
          <DemoBox name={allCode.Pagination.demoName} code={allCode.Pagination.code}>
            <Pagination />
          </DemoBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
