import React from 'react';
import { DemoBox } from '@style-guide/components';
import Button from './Button';
import Size from './Size';
import Color from './Color';
// __INJECTED_LINE__
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
