import React from 'react';
import { DemoBox } from '@style-guide/components';
import Dialog from './Dialog';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Dialog.demoName} code={allCode.Dialog.code}>
        <Dialog />
      </DemoBox>
    </div>
  );
};
