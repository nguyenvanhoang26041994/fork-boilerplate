import React from 'react';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';

import Loader from './Loader';
import Dot from './Dot';
import Spinner from './Spinner';
import Wave from './Wave';
import Attract from './Attract';
import NiceSpinner from './NiceSpinner';
import Move from './Move';
// __INJECTED_LINE__

import * as allCode from './code';

export default () => {
  return (
    <Flex wrap>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Loader.demoName} code={allCode.Loader.code}>
            <Loader />
          </DemoBox>
        </Flex>
        <Flex w="1/2">
          <DemoBox name={allCode.Dot.demoName} code={allCode.Dot.code}>
            <Dot />
          </DemoBox>
        </Flex>
      </Flex>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Wave.demoName} code={allCode.Wave.code}>
            <Wave />
          </DemoBox>
        </Flex>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.Attract.demoName} code={allCode.Attract.code}>
            <Attract />
          </DemoBox>
        </Flex>
        <Flex w="1/3">
          <DemoBox name={allCode.Spinner.demoName} code={allCode.Spinner.code}>
            <Spinner />
          </DemoBox>
        </Flex>
      </Flex>
      <Flex w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <DemoBox name={allCode.NiceSpinner.demoName} code={allCode.NiceSpinner.code}>
            <NiceSpinner />
          </DemoBox>
        </Flex>
        <Flex w="1/2">
          <DemoBox name={allCode.Move.demoName} code={allCode.Move.code}>
            <Move />
          </DemoBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
