import React from 'react';
import { DemoBox } from '@style-guide/components';
import Typo from './Typo';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Typo.demoName} code={allCode.Typo.code}>
        <Typo />
      </DemoBox>
    </div>
  );
};
