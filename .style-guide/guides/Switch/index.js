import React from 'react';
import { DemoBox } from '@style-guide/components';
import Switch from './Switch';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Switch.demoName} code={allCode.Switch.code}>
        <Switch />
      </DemoBox>
    </div>
  );
};
