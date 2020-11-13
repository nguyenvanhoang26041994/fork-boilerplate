import React from 'react';
import { Tabs, Flex } from '@@/fork-ui/src/components/core';
import DemoContent from '@@/.guide/shared/DemoContent';

const Demo = () => {
  const [{ currentTab }, { setCurrentTab }] = Tabs.useTabs({
    currentTab: 'fresh-tab',
  });

  return (
    <Flex col span="full">
      <Tabs>
        <Tabs.Tab
          active={currentTab === 'normal-tab'}
          onClick={() => setCurrentTab('normal-tab')}
        >
          Normal Tab
        </Tabs.Tab>
        <Tabs.Tab
          active={currentTab === 'fresh-tab'}
          onClick={() => setCurrentTab('fresh-tab')}
        >
          Fresh Tab
        </Tabs.Tab>
        <Tabs.Tab
          active={currentTab === 'other-tab'}
          onClick={() => setCurrentTab('other-tab')}
        >
          Other Tab
        </Tabs.Tab>
      </Tabs>
      <Tabs.Content active={currentTab === 'normal-tab'}>
        <DemoContent />
      </Tabs.Content>
      <Tabs.Content active={currentTab === 'fresh-tab'} fresh>
        <DemoContent />
      </Tabs.Content>
      <Tabs.Content active={currentTab === 'other-tab'}>
        <DemoContent />
      </Tabs.Content>
    </Flex>
  );
};

export default Demo;
