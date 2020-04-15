import React from 'react';
import { Button, Affix } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div
      className="flex w-full"
      style={{
        height: '1300px',
      }}
    >
      <Affix top={200}>
        <Button className="mr-10">Top 200px</Button>
      </Affix>
      <div className="flex-1">
        <Button>Button Right</Button>
      </div>
    </div>
  );
};

export default Demo;
Demo.header = 'Top';
Demo.href = 'affix-top';

Demo.code = `import React from 'react';
import { Button, Affix } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div
      className="flex w-full"
      style={{
        height: '1300px',
      }}
    >
      <Affix top={200}>
        <Button className="mr-10">Top 200px</Button>
      </Affix>
      <div className="flex-1">
        <Button>Button Right</Button>
      </div>
    </div>
  );
};

export default Demo;
`;
