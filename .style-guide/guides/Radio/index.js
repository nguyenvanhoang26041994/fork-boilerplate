import React from 'react';
import DemoBox from '@style-guide/containers/DemoBox';
import Radio from './Radio';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Radio.demoName} code={allCode.Radio.code}>
        <Radio />
      </DemoBox>
    </div>
  );
};
