import React from 'react';
import { Textarea } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Textarea
      disabled
      placeholder="The placeholder"
    />
  );
};

export default Demo;
Demo.header = 'Disabled';
Demo.href = 'textarea-disabled';

Demo.code = `import React from 'react';
import { Textarea } from '@/rc-neumorphism/core';

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
