export const FormField = {
  code: `import React from 'react';
import { ColumnWrapper } from '@style-guide/components';
import { Textarea, Textbox, Password } from '@fork-ui/core';

export default () => {
  return (
    <ColumnWrapper>
      <Textarea />
      <Textbox />
      <Password defaultValue="123456" />
    </ColumnWrapper>
  );
};
`,
  demoName: 'Form Field',
}

