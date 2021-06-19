import React from 'react';
import DemoBox from '@style-guide/containers/DemoBox';
import Tooltip from './Tooltip';
import Placement from './Placement';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Tooltip.demoName} code={allCode.Tooltip.code}>
        <Tooltip />
      </DemoBox>
    </div>
  );
};
