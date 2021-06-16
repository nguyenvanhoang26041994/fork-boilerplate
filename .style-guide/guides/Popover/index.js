import React from 'react';
import { DemoBox } from '@style-guide/components';
import Popover from './Popover';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Popover.demoName} code={allCode.Popover.code}>
        <Popover />
      </DemoBox>
    </div>
  );
};
