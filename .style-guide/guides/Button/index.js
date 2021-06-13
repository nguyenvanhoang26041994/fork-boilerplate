import React from 'react';
import { DemoBox } from '@style-guide/components';
import Button from './Button';
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Button.demoName} code={allCode.Button.code}>
        <Button />
      </DemoBox>
    </div>
  );
};
