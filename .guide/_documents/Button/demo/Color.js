import React from 'react';
import { Button } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Button className="mr-2" color="blueviolet">Blueviolet</Button>
      <Button className="mr-2" color="orangered">Orangered</Button>
      <Button className="mr-2" color="green">Green</Button>
    </div>
  );
};

export default Demo;
Demo.header = 'COLOR';
Demo.anchorTitle = 'Color';
Demo.href = 'button-color';

Demo.code = `import React from 'react';
import { Button } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Button className="mr-2" color="blueviolet">Blueviolet</Button>
      <Button className="mr-2" color="orangered">Orangered</Button>
      <Button className="mr-2" color="green">Green</Button>
    </div>
  );
};

export default Demo;
`;
