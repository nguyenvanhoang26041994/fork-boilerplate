import React from 'react';
import DemoBox from '@style-guide/containers/DemoBox';
import Loader from './Loader';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Loader.demoName} code={allCode.Loader.code}>
        <Loader />
      </DemoBox>
    </div>
  );
};
