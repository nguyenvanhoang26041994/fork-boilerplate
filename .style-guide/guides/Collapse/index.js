import React from 'react';
import { DemoBox } from '@style-guide/components';
import Collapse from './Collapse';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Collapse.demoName} code={allCode.Collapse.code}>
        <Collapse />
      </DemoBox>
    </div>
  );
};
