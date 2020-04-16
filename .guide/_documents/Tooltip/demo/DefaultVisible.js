import React from 'react';
import { Button, Tooltip } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Tooltip title="tooltip title" defaultVisible>
        <Button className="mr-2">Defaul Visible</Button>
      </Tooltip>
    </div>
  );
};

export default Demo;
Demo.header = 'DEFAULT VISIBLE';
Demo.anchorTitle = 'Default visible';
Demo.href = 'tooltip-default-visible';

Demo.code = `import React from 'react';
import { Button, Tooltip } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Tooltip title="tooltip title" defaultVisible>
        <Button className="mr-2">Defaul Visible</Button>
      </Tooltip>
    </div>
  );
};

export default Demo;
`;
