import React from 'react';
import { Tabs, Badge, Tooltip, Flex } from '@@/fork-ui/src/components/core';
import { MailOpened, BrandMessenger } from '@@/fork-ui/src/components/icons';
import DemoContent from '@@/.guide/shared/DemoContent';

const Demo = () => {
  const [props] = Tabs.useTabs('tab-2');

  return (
    <Flex span="full">
      <Tabs {...props}>
        <Tabs.Item title="NORMAL TAB" key="tab-1">
          <DemoContent />
        </Tabs.Item>
        <Tabs.Item title="FRESH TAB" fresh key="tab-2">
          <DemoContent />
        </Tabs.Item>
        <Tabs.Item title="DISABLED TAB" disabled key="tab-3">
          <DemoContent />
        </Tabs.Item>
        <Tabs.Item
          title={<span className="flex">WITH ICON<MailOpened className="ml-2" /></span>}
          key="tab-4"
        >
          <DemoContent />
        </Tabs.Item>
        <Tabs.Item
          title={(
            <Badge.Dot topRight>
              <span>WITH BADGE</span>
            </Badge.Dot>
          )}
          key="tab-5"
        >
          <DemoContent />
        </Tabs.Item>
        <Tabs.Item
          title={(
            <Tooltip top title="You have new 99 unread messages!">
              <Badge.Counter topRight count={99}>
                <BrandMessenger />
              </Badge.Counter>
            </Tooltip>
          )}
          key="tab-6"
        >
          <DemoContent />
        </Tabs.Item>
      </Tabs>
    </Flex>
  );
};

export default Demo;
