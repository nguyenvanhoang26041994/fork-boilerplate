import React from 'react';
import styled from 'styled-components';
import { Tabs, Flex } from '@@/fork-ui/src/components/core';
import {
  BluetoothConnected,
  BrandGithub,
  BrandTabler,
  Plus,
} from '@@/fork-ui/src/components/icons';
import DemoContent from '@@/.guide/shared/DemoContent';

const StyledTab = styled(Tabs.Tab)`
  border-color: var(--primary);
  background-color: rgba(0, 0, 0, 0.3);

  &.ftabs-tab-active {
    background-color: var(--primary);
    color: #fff;
  }
`;

const AdderTab = styled(Tabs.Tab)`
  border-color: transparent;
`;

const StyledPanel = styled(Tabs.Panel)`
  background-color: rgba(0, 0, 0, 0.3);
`;

const Demo = () => {
  const [{ currentTab }, { setCurrentTab }] = Tabs.useTabs({
    currentTab: 'normal-tab',
  });

  return (
    <Flex
      col
      span="full"
      className="p-5"
      style={{
        backgroundColor: 'var(--body-bg)',
        borderRadius: 'var(--border-radius)',
      }}
    >
      <StyledPanel active={currentTab === 'normal-tab'}>
        <DemoContent />
      </StyledPanel>
      <StyledPanel active={currentTab === 'fresh-tab'} fresh>
        <DemoContent />
      </StyledPanel>
      <StyledPanel active={currentTab === 'other-tab'}>
        <DemoContent />
      </StyledPanel>
      <Tabs>
        <StyledTab
          active={currentTab === 'normal-tab'}
          onClick={() => setCurrentTab('normal-tab')}
        >
          <BluetoothConnected />
        </StyledTab>
        <StyledTab
          active={currentTab === 'fresh-tab'}
          onClick={() => setCurrentTab('fresh-tab')}
        >
          <BrandGithub />
        </StyledTab>
        <StyledTab
          active={currentTab === 'other-tab'}
          onClick={() => setCurrentTab('other-tab')}
        >
          <BrandTabler />
        </StyledTab>
        <AdderTab
          active={currentTab === 'adder-tab'}
          onClick={() => setCurrentTab('adder-tab')}
        >
          <Plus />
        </AdderTab>
      </Tabs>
      <StyledPanel active={currentTab === 'adder-tab'}>
        <DemoContent />
      </StyledPanel>
    </Flex>
  );
};

export default Demo;
