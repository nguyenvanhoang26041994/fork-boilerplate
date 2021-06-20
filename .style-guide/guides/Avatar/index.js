import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Avatar from './Avatar';
import Color from './Color';
import Size from './Size';
import WithBadge from './WithBadge';
import AvatarGroup from './AvatarGroup';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Avatar.demoName} code={allCode.Avatar.code}>
            <Avatar />
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
          <DemoBox name={allCode.WithBadge.demoName} code={allCode.WithBadge.code}>
            <WithBadge />
          </DemoBox>
        </Flex>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.AvatarGroup.demoName} code={allCode.AvatarGroup.code}>
            <AvatarGroup />
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
