import React from 'react';
import { Button } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Button className="mr-2" color="blueviolet">Blueviolet</Button>
      <Button className="mr-2" color="orangered">Orangered</Button>
      <Button className="mr-2" color="green">Green</Button>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Button } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Button className="mr-2" color="blueviolet">Blueviolet</Button>
      <Button className="mr-2" color="orangered">Orangered</Button>
      <Button className="mr-2" color="green">Green</Button>
    </div>
  );
};
`;

export default Demo;
