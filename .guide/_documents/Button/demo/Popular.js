import React from 'react';
import { Button } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Button primary className="mr-2">PRIMARY</Button>
      <Button danger className="mr-2">DANGER</Button>
      <Button glassed className="mr-2">GLASSED</Button>
    </div>
  );
};

export default Demo;
Demo.header = 'POPULAR';
Demo.anchorTitle = 'Popular';
Demo.href = 'button-popular';

Demo.code = `import React from 'react';
import { Button } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Button primary className="mr-2">PRIMARY</Button>
      <Button danger className="mr-2">DANGER</Button>
      <Button glassed className="mr-2">GLASSED</Button>
    </div>
  );
};

export default Demo;
`;
