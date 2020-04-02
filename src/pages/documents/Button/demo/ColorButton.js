import React from 'react';
import { Button } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Button primary className="mr-2">PRIMARY</Button>
      <Button danger className="mr-2">DANGER</Button>
      <Button green className="mr-2">GREEN</Button>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Button } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Button primary className="mr-2">PRIMARY</Button>
      <Button danger className="mr-2">DANGER</Button>
      <Button green className="mr-2">GREEN</Button>
    </div>
  );
};
`;

export default Demo;
