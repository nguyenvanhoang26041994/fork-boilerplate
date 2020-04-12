import React from 'react';
import { Button } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Button className="mr-2">Basic</Button>
      <Button pressed className="mr-2">Pressed</Button>
      <Button disabled className="mr-2">Disabled</Button>
      <Button rounded className="mr-2">Rounded</Button>
      <Button circle icon="power" className="mr-2" />
    </div>
  );
};

export default Demo;
