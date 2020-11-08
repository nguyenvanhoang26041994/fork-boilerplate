import React from 'react';
import { Tabs, Flex } from '@@/fork-ui/src/components/core';
import DemoContent from '@@/.guide/shared/DemoContent';

const Demo = () => {
  const [{ currentTab, onChange }] = Tabs.useTabs({
    currentTab: 'fresh-tab',
  });

  return (
    <Flex col span="full">
      <Tabs>
        <Tabs.Tab
          value="normal-tab"
          active={currentTab === 'normal-tab'}
          onClick={() => onChange('normal-tab')}
        >
          Normal Tab
        </Tabs.Tab>
        <Tabs.Tab
          value="fresh-tab"
          active={currentTab === 'fresh-tab'}
          onClick={() => onChange('fresh-tab')}
        >
          Fresh Tab
        </Tabs.Tab>
        <Tabs.Tab
          value="other-tab"
          active={currentTab === 'other-tab'}
          onClick={() => onChange('other-tab')}
        >
          Other Tab
        </Tabs.Tab>
      </Tabs>
    </Flex>
  );
};

export default Demo;
