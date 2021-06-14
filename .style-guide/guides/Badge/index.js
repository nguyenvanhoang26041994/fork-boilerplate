import React from 'react';
import { DemoBox } from '@style-guide/components';
import Badge from './Badge';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Badge.demoName} code={allCode.Badge.code}>
        <Badge />
      </DemoBox>
    </div>
  );
};
