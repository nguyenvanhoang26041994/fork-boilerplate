import React from 'react';
import DemoBox from '@style-guide/containers/DemoBox';
import Tabs from './Tabs';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Tabs.demoName} code={allCode.Tabs.code}>
        <Tabs />
      </DemoBox>
    </div>
  );
};
