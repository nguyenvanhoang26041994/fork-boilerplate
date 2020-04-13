import React from 'react';
import { Password } from '@/components';

const Demo = () => {
  return (
    <Password
      noEye
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;

Demo.header = 'NOEYE';
Demo.href = 'password-noeye';
Demo.code = `import React from 'react';
import { Password } from '@/components';

const Demo = () => {
  return (
    <Password
      noEye
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
`;
