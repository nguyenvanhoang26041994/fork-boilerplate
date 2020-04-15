import React from 'react';
import { Textbox } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Textbox
      disabled
      placeholder="The placeholder"
    />
  );
};

export default Demo;
Demo.header = 'Disabled';
Demo.href = 'textbox-disabled';

Demo.code = `import React from 'react';
import { Textbox } from '@/rc-neumorphism/core';

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
