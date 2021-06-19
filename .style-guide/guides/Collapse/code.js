export const Collapse = {
  code: `import React from 'react';
import { DemoContent } from '@style-guide/components';
import { Flex, Collapse } from '@fork-ui/core';
import {
  PlaneDeparture,
  Share,
  Rotate2,
} from '@fork-ui/icons/lazy';

export default () => {
  const [{ isActive, onChange }] = Collapse.useCollapse({
    activePanels: ['panel-1'],
  });

  return (
    <Flex col w="full">
      <Collapse>
        <Collapse.Panel
          title={(
            <span className="flex">
              <Share className="mr-2" />NORMAL PANEL
            </span>
          )}
          value="panel-1"
          active={isActive('panel-1')}
          onClick={() => onChange('panel-1')}
        >
          <DemoContent />
        </Collapse.Panel>
        <Collapse.Panel 
          fresh
          title={(
            <span className="flex">
              <Rotate2 className="mr-2" />FRESH PANEL
            </span>
          )}
          value="panel-2"
          active={isActive('panel-2')}
          onClick={() => onChange('panel-2')}
        >
          <DemoContent />
        </Collapse.Panel>
        <Collapse.Panel
          title={(
            <span className="flex">
              <PlaneDeparture className="mr-2" />DISABLED PANEL
            </span>
          )}
          disabled
          value="panel-3"
          active={isActive('panel-3')}
          onClick={() => onChange('panel-3')}
        >
          <DemoContent />
        </Collapse.Panel>
      </Collapse>
    </Flex>
  );
};
`,
  demoName: 'Collapse',
}

