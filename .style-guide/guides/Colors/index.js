import React from 'react';
import { DemoBox } from '@style-guide/components';
import Colors from './Colors';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Colors.demoName} code={allCode.Colors.code}>
        <Colors />
      </DemoBox>
    </div>
  );
};
