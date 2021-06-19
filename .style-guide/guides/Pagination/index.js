import React from 'react';
import DemoBox from '@style-guide/containers/DemoBox';
import Pagination from './Pagination';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.Pagination.demoName} code={allCode.Pagination.code}>
        <Pagination />
      </DemoBox>
    </div>
  );
};
