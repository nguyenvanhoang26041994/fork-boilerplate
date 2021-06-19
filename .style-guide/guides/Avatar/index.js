import React from 'react';
import DemoBox from '@style-guide/containers/DemoBox';
import Avatar from './Avatar';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Avatar.demoName} code={allCode.Avatar.code}>
        <Avatar />
      </DemoBox>
    </div>
  );
};
