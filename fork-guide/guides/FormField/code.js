export const FormField = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Textarea, Textbox, Password } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper col>
      <Textarea />
      <Textbox />
      <Password defaultValue="123456" />
    </Wrapper>
  );
};
`,
  demoName: 'Form Field',
}

