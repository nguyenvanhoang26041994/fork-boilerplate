import React from 'react';
import { Textbox } from '@/components';

const Demo = () => {
  return (
    <Textbox
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;

Demo.header = 'BASIC';
Demo.href = 'textbox-basic';
Demo.code = `import React from 'react';
import { Textbox } from '@/components';

const Demo = () => {
  return (
    <Textbox
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
`;
