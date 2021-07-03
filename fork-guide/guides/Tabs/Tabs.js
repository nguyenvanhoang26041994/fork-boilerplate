import React from 'react';
import { Tabs, Flex } from '@fork-ui/core';
import { Refresh } from '@fork-ui/icons/lazy';
import { DemoContent  } from '@fork-guide/components';

export default () => {
  const [{ currentTab }, { setCurrentTab }] = Tabs.useTabs({
    currentTab: 'fresh-tab',
  });
  return (
    <Flex col w="full">
      <Tabs>
        <Tabs.Tab
          active={currentTab === 'normal-tab'}
          onClick={() => setCurrentTab('normal-tab')}
        >
          This tab always saved panel
        </Tabs.Tab>
        <Tabs.Tab
          active={currentTab === 'fresh-tab'}
          onClick={() => setCurrentTab('fresh-tab')}
        >
          <Refresh className="mr-2" />
          <span>This tab always refresh panel</span>
        </Tabs.Tab>
        <Tabs.Tab
          disabled
          active={currentTab === 'disabled-tab'}
          onClick={() => setCurrentTab('disabled-tab')}
        >
          The disabled tab
        </Tabs.Tab>
      </Tabs>
      <Tabs.Panel active={currentTab === 'normal-tab'}>
        <DemoContent />
      </Tabs.Panel>
      <Tabs.Panel active={currentTab === 'fresh-tab'} fresh>
        <DemoContent />
      </Tabs.Panel>
      <Tabs.Panel active={currentTab === 'disabled-tab'}>
        <DemoContent />
      </Tabs.Panel>
    </Flex>
  );
};
