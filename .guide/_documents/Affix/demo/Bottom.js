import React from 'react';
import { Affix, Button } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div
      className="flex w-full flex-col"
      style={{
        height: 2000,
      }}
    >
      <Affix bottom={100}>
        <Button>Bottom 100px</Button>
      </Affix>
    </div>
  );
};

export default Demo;
Demo.header = 'BOTTOM';
Demo.anchorTitle = 'Bottom';
Demo.href = 'affix-bottom';

Demo.code = `import React from 'react';
import { Affix, Button } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <div
      className="flex w-full flex-col"
      style={{
        height: 2000,
      }}
    >
      <Affix bottom={100}>
        <Button>Bottom 100px</Button>
      </Affix>
    </div>
  );
};

export default Demo;
`;
