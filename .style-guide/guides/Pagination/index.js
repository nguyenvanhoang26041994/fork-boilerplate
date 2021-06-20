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
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Pagination.demoName} code={allCode.Pagination.code}>
            <Pagination />
          </DemoBox>
        </Flex>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Pagination.demoName} code={allCode.Pagination.code}>
            <Pagination />
          </DemoBox>
        </Flex>
        <Flex w="1/3">
          <DemoBox name={allCode.Pagination.demoName} code={allCode.Pagination.code}>
            <Pagination />
          </DemoBox>
        </Flex>
      </Flex>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Pagination.demoName} code={allCode.Pagination.code}>
            <Pagination />
          </DemoBox>
        </Flex>
        <Flex w="1/2">
          <DemoBox name={allCode.Pagination.demoName} code={allCode.Pagination.code}>
            <Pagination />
          </DemoBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
