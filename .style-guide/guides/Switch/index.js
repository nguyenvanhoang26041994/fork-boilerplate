import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Switch from './Switch';
import Color from './Color';
import Size from './Size';
import Controlled from './Controlled';
import Disabled from './Disabled';
import Loading from './Loading';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Switch.demoName} code={allCode.Switch.code}>
            <Switch />
          </DemoBox>
        </Flex>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Disabled.demoName} code={allCode.Disabled.code}>
            <Disabled />
          </DemoBox>
        </Flex>
        <Flex w="1/3">
          <DemoBox name={allCode.Color.demoName} code={allCode.Color.code}>
            <Color />
          </DemoBox>
        </Flex>
      </Flex>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Controlled.demoName} code={allCode.Controlled.code}>
            <Controlled />
          </DemoBox>
        </Flex>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Loading.demoName} code={allCode.Loading.code}>
            <Loading />
          </DemoBox>
        </Flex>
        <Flex w="1/3">
          <DemoBox name={allCode.Size.demoName} code={allCode.Size.code}>
            <Size />
          </DemoBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
