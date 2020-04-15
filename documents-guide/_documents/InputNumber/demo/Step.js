import React from 'react';
import { InputNumber } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <InputNumber
      step={10}
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
Demo.header = 'Step';
Demo.href = 'inputnumber-step';

Demo.code = `import React from 'react';
import { InputNumber } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <InputNumber
      step={10}
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
`;
