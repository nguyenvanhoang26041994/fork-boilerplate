import React from 'react';
import { InputNumber } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <InputNumber
      disabled
      defaultValue={10}
      placeholder="The placeholder"
    />
  );
};

export default Demo;
Demo.header = 'DISABLED';
Demo.anchorTitle = 'Disabled';
Demo.href = 'inputnumber-disabled';

Demo.code = `import React from 'react';
import { InputNumber } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <InputNumber
      disabled
      defaultValue={10}
      placeholder="The placeholder"
    />
  );
};

export default Demo;
`;
