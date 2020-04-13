import React from 'react';
import { Password } from '@/components';

const Demo = () => {
  return (
    <Password
      disabled
      placeholder="The placeholder"
    />
  );
};

export default Demo;

Demo.header = 'DISABLED';
Demo.href = 'password-disabled';
Demo.code = `import React from 'react';
import { Password } from '@/components';

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
