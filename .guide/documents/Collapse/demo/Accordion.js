import React from 'react';
import { Collapse, Badge } from '@@/fork-ui/src/components/core';
import { MailOpened } from '@@/fork-ui/src/components/icons';
import DemoContent from '@@/.guide/shared/DemoContent';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Collapse accordion defaultActivePanels={['panel-1']}>
        <Collapse.Item title="NORMAL PANEL" key="panel-1">
          <DemoContent />
        </Collapse.Item>
        <Collapse.Item fresh title="FRESH PANEL" key="panel-2">
          <DemoContent />
        </Collapse.Item>
        <Collapse.Item title="DISABLED PANEL" disabled key="panel-3">
          <DemoContent />
        </Collapse.Item>
        <Collapse.Item
          title={<span className="flex">WITH ICON<MailOpened className="ml-2" /></span>}
          key="panel-4"
        >
          <DemoContent />
        </Collapse.Item>
        <Collapse.Item
          title={<Badge count={99} topRight dot><span>WITH BADGE</span></Badge>}
          key="panel-5"
        >
          <DemoContent />
        </Collapse.Item>
      </Collapse>
    </div>
  );
};

export default Demo;
