import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Button from './Button';
import Color from './Color';
import Size from './Size';
import Bordered from './Bordered';
import Disabled from './Disabled';
import WithIcon from './WithIcon';
import WithLoader from './WithLoader';
import WithBadge from './WithBadge';
import GroupButton from './GroupButton';
import FluidGroupButton from './FluidGroupButton';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Button.demoName} code={allCode.Button.code}>
            <Button />
          </DemoBox>
        </Flex>
        <Flex w="1/2">
          <DemoBox name={allCode.Color.demoName} code={allCode.Color.code}>
            <Color />
          </DemoBox>
        </Flex>
      </Flex>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Bordered.demoName} code={allCode.Bordered.code}>
            <Bordered />
          </DemoBox>
        </Flex>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Size.demoName} code={allCode.Size.code}>
            <Size />
          </DemoBox>
        </Flex>
        <Flex w="1/3">
          <DemoBox name={allCode.Disabled.demoName} code={allCode.Disabled.code}>
            <Disabled />
          </DemoBox>
        </Flex>
      </Flex>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.GroupButton.demoName} code={allCode.GroupButton.code}>
            <GroupButton />
          </DemoBox>
        </Flex>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.WithLoader.demoName} code={allCode.WithLoader.code}>
            <WithLoader />
          </DemoBox>
        </Flex>
        <Flex w="1/3">
          <DemoBox name={allCode.WithLoader.demoName} code={allCode.WithLoader.code}>
            <WithBadge />
          </DemoBox>
        </Flex>
      </Flex>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.WithIcon.demoName} code={allCode.WithIcon.code}>
            <WithIcon />
          </DemoBox>
        </Flex>
        <Flex w="1/2">
          <DemoBox name={allCode.FluidGroupButton.demoName} code={allCode.FluidGroupButton.code}>
            <FluidGroupButton />
          </DemoBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
