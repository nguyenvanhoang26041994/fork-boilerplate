import React from 'react';
import { Password } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Password
      disabled
      placeholder="The placeholder"
    />
  );
};

export default Demo;
Demo.header = 'Disabled';
Demo.href = 'password-disabled';

Demo.code = `import React from 'react';
import { Password } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Password
      disabled
      placeholder="The placeholder"
    />
  );
};

export default Demo;
`;
