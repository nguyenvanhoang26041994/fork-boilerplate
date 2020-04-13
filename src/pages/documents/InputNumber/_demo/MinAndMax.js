import React from 'react';
import { InputNumber } from '@/components';

const Demo = () => {
  return (
    <InputNumber
      min={5}
      max={10}
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;

Demo.header = 'MINANDMAX';
Demo.href = 'inputnumber-minandmax';
Demo.code = `import React from 'react';
import { InputNumber } from '@/components';

const Demo = () => {
  return (
    <InputNumber
      min={5}
      max={10}
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
`;
