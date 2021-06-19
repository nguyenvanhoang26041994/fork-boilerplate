import React from 'react';
import DemoBox from '@style-guide/containers/DemoBox';
import Checkbox from './Checkbox';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Checkbox.demoName} code={allCode.Checkbox.code}>
        <Checkbox />
      </DemoBox>
    </div>
  );
};
