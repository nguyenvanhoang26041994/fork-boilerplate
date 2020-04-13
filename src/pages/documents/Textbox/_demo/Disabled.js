import React from 'react';
import { Textbox } from '@/components';

const Demo = () => {
  return (
    <Textbox
      disabled
      placeholder="The placeholder"
    />
  );
};

export default Demo;

Demo.header = 'DISABLED';
Demo.href = 'textbox-disabled';
Demo.code = `import React from 'react';
import { Textbox } from '@/components';

const Demo = () => {
  return (
    <Textbox
      disabled
      placeholder="The placeholder"
    />
  );
};

export default Demo;
`;
