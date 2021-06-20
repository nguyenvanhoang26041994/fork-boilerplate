import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Alert from './Alert';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={ { paddingBottom: '1px' } }>
        <Flex w="2/3" style={ { paddingRight: '1px' } }>
          <DemoBox name={allCode.Alert.demoName} code={allCode.Alert.code}>
            <Alert />
          </DemoBox>
        </Flex>
        <Flex w="1/3">
          <DemoBox name={allCode.Alert.demoName} code={allCode.Alert.code}>
           
          </DemoBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
