import React from 'react';
import { DemoBox } from '@style-guide/components';
import Stepper from './Stepper';
import Alternate from './Alternate';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Stepper.demoName} code={allCode.Stepper.code}>
        <Stepper />
      </DemoBox>
    </div>
  );
};
