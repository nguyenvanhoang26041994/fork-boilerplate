export const Tabs = {
  code: `import React from 'react';
import { Tabs, Flex } from 'fork-design';
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
`,
  demoName: 'Tabs',
}

export const WithButtonGroup = {
  code: `import React from 'react';
import { DemoContent } from '@fork-guide/components';
import { Tabs, Button, ButtonGroup, Flex } from 'fork-design';
import { RefreshAlert } from '@fork-ui/icons/lazy';

export default () => {
  const [{ currentTab }, { setCurrentTab }] = Tabs.useTabs({
    currentTab: 'fresh-tab',
  });

  return (
    <Flex col w="full">
      <ButtonGroup fluid>
        <Button
          onClick={() => setCurrentTab('normal-tab')}
          color={'normal-tab' === currentTab ? 'primary' : ''}
        >
          NORMAL TAB
        </Button>
        <Button
          onClick={() => setCurrentTab('fresh-tab')}
          color={'fresh-tab' === currentTab ? 'primary' : ''}
        >
          <RefreshAlert />
          FRESH TAB
        </Button>
        <Button
          onClick={() => setCurrentTab('other-tab')}
          color={'other-tab' === currentTab ? 'primary' : ''}
        >
          OTHER TAB
        </Button>
        <Button
          onClick={() => setCurrentTab('disabled-tab')}
          color={'disabled-tab' === currentTab ? 'primary' : ''}
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
`,
  demoName: 'With Button Group',
}

