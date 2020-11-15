import React from 'react';
import {
  Tabs,
  Flex,
  Button,
  ButtonGroup,
} from '@@/fork-ui/src/components/core';
import { RefreshAlert } from '@@/fork-ui/src/components/icons';
import DemoContent from '@@/.guide/shared/DemoContent';

const Demo = () => {
  const [{ currentTab }, { setCurrentTab }] = Tabs.useTabs({
    currentTab: 'fresh-tab',
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
      <ButtonGroup fluid>
        <Button
          onClick={() => setCurrentTab('normal-tab')}
          primary={'normal-tab' === currentTab}
        >
          NORMAL TAB
        </Button>
        <Button
          onClick={() => setCurrentTab('fresh-tab')}
          primary={'fresh-tab' === currentTab}
        >
          <RefreshAlert />
          FRESH TAB
        </Button>
        <Button
          onClick={() => setCurrentTab('other-tab')}
          primary={'other-tab' === currentTab}
        >
          OTHER TAB
        </Button>
        <Button
          onClick={() => setCurrentTab('disabled-tab')}
          primary={'disabled-tab' === currentTab}
          disabled
        >
          DISABLED TAB
        </Button>
      </ButtonGroup>
      <Tabs.Panel active={currentTab === 'normal-tab'}>
        <DemoContent />
      </Tabs.Panel>
      <Tabs.Panel active={currentTab === 'fresh-tab'} fresh>
        <DemoContent />
      </Tabs.Panel>
      <Tabs.Panel active={currentTab === 'other-tab'}>
        <DemoContent />
      </Tabs.Panel>
      <Tabs.Panel active={currentTab === 'disabled-tab'}>
        <DemoContent />
      </Tabs.Panel>
    </Flex>
  );
};

export default Demo;
