import React, { useState, useCallback } from 'react';
import { Tabs, Badge, Tooltip } from '@@/fork-ui/src/components/core';
import { MailOpened, BrandMessenger } from '@@/fork-ui/src/components/icons';
import DemoContent from '@@/.guide/shared/DemoContent';

const Demo = () => {
  const [value, setValue] = useState('tab-2');
  const onChange = useCallback(key => setValue(key), [setValue]);

  return (
    <div className="flex flex-col w-full">
      <Tabs value={value} onChange={onChange}>
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
          title={<Badge count={99} topRight dot><span>WITH BADGE</span></Badge>}
          key="tab-5"
        >
          <DemoContent />
        </Tabs.Item>
        <Tabs.Item
          title={(
            <Tooltip top title="You have new 99 unread messages!">
              <Badge count={99} topRight><BrandMessenger /></Badge>
            </Tooltip>
          )}
          key="tab-6"
        >
          <DemoContent />
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default Demo;
