import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Modal from './Modal';
import Centered from './Centered';
import MarginView from './MarginView';
import Width from './Width';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={ { paddingBottom: '1px' } }>
        <Flex w="1/3" style={ { paddingRight: '1px' } }>
          <DemoBox name={allCode.Modal.demoName} code={allCode.Modal.code}>
            <Modal />
          </DemoBox>
        </Flex>
        <Flex w="1/3" style={ { paddingRight: '1px' } }>
          <DemoBox name={allCode.Centered.demoName} code={allCode.Centered.code}>
            <Centered />
          </DemoBox>
        </Flex>
        <Flex w="1/3">
          <DemoBox name={allCode.MarginView.demoName} code={allCode.MarginView.code}>
            <MarginView />
          </DemoBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
