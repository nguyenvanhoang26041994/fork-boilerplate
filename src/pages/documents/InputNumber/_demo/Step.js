import React from 'react';
import { InputNumber } from '@/components';

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

Demo.header = 'STEP';
Demo.href = 'inputnumber-step';
Demo.code = `import React from 'react';
import { InputNumber } from '@/components';

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
