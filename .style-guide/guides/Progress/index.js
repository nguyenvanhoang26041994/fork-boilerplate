import React from 'react';
import DemoBox from '@style-guide/containers/DemoBox';
import Progress from './Progress';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Progress.demoName} code={allCode.Progress.code}>
        <Progress />
      </DemoBox>
    </div>
  );
};
