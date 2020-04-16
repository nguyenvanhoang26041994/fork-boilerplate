import React from 'react';
import { Button, Icon } from '@/rc-neumorphism/core';

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
Demo.header = 'WITH ICON';
Demo.anchorTitle = 'With icon';
Demo.href = 'button-with-icon';

Demo.code = `import React from 'react';
import { Button, Icon } from 'rc-neumorphism/core';

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
`;
