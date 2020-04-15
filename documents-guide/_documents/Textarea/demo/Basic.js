import React from 'react';
import { Textarea } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Textarea
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
Demo.header = 'Basic';
Demo.href = 'textarea-basic';

Demo.code = `import React from 'react';
import { Textarea } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Textarea
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
`;
