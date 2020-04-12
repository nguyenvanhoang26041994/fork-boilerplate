import React from 'react';
import { Button, Icon } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Button className="mr-2">
        <Icon name="power" className="mr-2" />
        <span>Shutdown</span>
      </Button>
      <Button className="mr-2">
        <span>Shutdown</span>
        <Icon name="power" className="ml-2" />
      </Button>
      <Button className="mr-2">
        <Icon name="power" className="mr-2" />
        <span>Shutdown</span>
        <Icon name="power" className="ml-2" />
      </Button>
    </div>
  );
};

export default Demo;
