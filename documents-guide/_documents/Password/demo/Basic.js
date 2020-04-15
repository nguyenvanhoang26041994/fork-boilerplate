import React from 'react';
import { Password } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Password
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
Demo.header = 'Basic';
Demo.href = 'password-basic';

Demo.code = `import React from 'react';
import { Password } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Password
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
`;
