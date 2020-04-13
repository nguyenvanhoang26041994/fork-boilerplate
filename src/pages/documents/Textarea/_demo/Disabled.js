import React from 'react';
import { Textarea } from '@/components';

const Demo = () => {
  return (
    <Textarea
      disabled
      placeholder="The placeholder"
    />
  );
};

export default Demo;

Demo.header = 'DISABLED';
Demo.href = 'textarea-disabled';
Demo.code = `import React from 'react';
import { Textarea } from '@/components';

const Demo = () => {
  return (
    <Textarea
      disabled
      placeholder="The placeholder"
    />
  );
};

export default Demo;
`;
