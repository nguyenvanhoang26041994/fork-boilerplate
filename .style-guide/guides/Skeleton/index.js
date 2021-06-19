import React from 'react';
import DemoBox from '@style-guide/containers/DemoBox';
import Skeleton from './Skeleton';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Skeleton.demoName} code={allCode.Skeleton.code}>
        <Skeleton />
      </DemoBox>
    </div>
  );
};
