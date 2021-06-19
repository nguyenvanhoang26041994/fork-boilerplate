import React from 'react';
import DemoBox from '@style-guide/containers/DemoBox';
import FormField from './FormField';
// __INJECTED_LINE__
import * as allCode from './code';

export default () => {
  return (
    <div>
      <DemoBox name={allCode.FormField.demoName} code={allCode.FormField.code}>
        <FormField />
      </DemoBox>
    </div>
  );
};
