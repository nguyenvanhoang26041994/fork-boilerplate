import React from 'react';
import { InputNumber } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <InputNumber
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
Demo.header = 'Basic';
Demo.href = 'inputnumber-basic';

Demo.code = `import React from 'react';
import { InputNumber } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <InputNumber
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
`;
